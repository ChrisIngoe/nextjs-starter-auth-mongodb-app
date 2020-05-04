import nextConnect from 'next-connect';
import bcrypt from 'bcryptjs';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();
handler.use(middleware);

handler.put(async (req, res) => {
  if (!req.user) {
    res.json(401).send('Unauthenticated');
    return;
  }
  const { oldPassword, newPassword } = req.body;
  if (!(await bcrypt.compare(oldPassword, req.user.password))) {
    res.status(401).send('Incorrect email or password');
  }
  const password = await bcrypt.hash(newPassword, 10);
  await req.db
    .collection('users')
    .updateOne({ _id: req.user._id }, { $set: { password } });
  res.end('ok');
});

export default handler;
