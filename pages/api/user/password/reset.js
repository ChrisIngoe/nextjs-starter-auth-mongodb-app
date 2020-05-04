import sgMail from '@sendgrid/mail';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import nextConnect from 'next-connect';
import database from '../../../../middlewares/database';
import isEmail from 'validator/lib/isEmail';
import normalizeEmail from 'validator/lib/normalizeEmail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = nextConnect();

handler.use(database);

handler.post(async (req, res) => {
  const email = normalizeEmail(req.body.email);
  if (!isEmail(email)) {
    res.status(400).send('Invalid email address');
    return;
  }
  const user = await req.db.collection('users').findOne({ email: email });
  if (!user) {
    res.status(401).send('Email address not found');
    return;
  }
  const token = crypto.randomBytes(32).toString('hex');
  await req.db.collection('tokens').insertOne({
    token,
    userId: user._id,
    type: 'passwordReset',
    expireAt: new Date(Date.now() + 1000 * 60 * 20),
  });
  const msg = {
    to: user.email,
    from: process.env.EMAIL_FROM,
    subject: '[nextjs-starter-auth-mongodb-app] Reset your password.',
    text: `Hello ${user.name}
      
      Please follow the link below to reset your password.
      
      ${process.env.WEB_URI}/page/forgotpassword/${token}
      `,
    html: `
      <div>
        <p>Hello, ${user.name}</p>
        <p>Please follow <a href="${process.env.WEB_URI}/page/forgotpassword/${token}">this link</a> to reset your password.</p>
      </div>
      `,
  };
  await sgMail.send(msg);
  res.end('ok');
});

handler.put(async (req, res) => {
  // password reset
  if (!req.body.password) {
    req.status(400).send('Password not provided');
    return;
  }
  const { value: tokenDoc } = await req.db
    .collection('tokens')
    .findOneAndDelete({ token: req.body.token, type: 'passwordReset' });
  if (!tokenDoc) {
    res.status(403).send('The link may have expired.');
    return;
  }
  const password = await bcrypt.hash(req.body.password, 10);
  await req.db
    .collection('users')
    .updateOne({ _id: tokenDoc.userId }, { $set: { password } });
  res.end('ok');
});

export default handler;
