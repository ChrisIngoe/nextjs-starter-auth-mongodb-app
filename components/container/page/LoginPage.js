import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { useUser } from '../../../lib/hooks';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [user, { mutate }] = useUser();
  const router = useRouter();

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.push('/');
  }, [user]);

  const loginHandler = async e => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    try {
      console.log(body);
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        //Router.push('/');
        const userObj = await res.json();
        mutate(userObj);
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setErrorMsg(error.message);
    }
  };

  return (
    <Card className="w-25 box-shadow">
      <CardBody>
        <Form action="/page/profile" method="POST">
          <fieldset>
            <legend className="text-primary bg-gradient-primary font-weight-bold uppercase">
              <h3 className="mt-2 ml-3 text-light text-center">Login</h3>
            </legend>
            {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
            <FormGroup>
              <Label for="exampleInputEmail3">Email address</Label>
              <Input
                type="email"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                onChange={e => setEmail(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                className="form-control"
                id="password"
                onChange={e => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck3"
              />
              <Label check for="exampleCheck3">
                Check me out
              </Label>
            </FormGroup>
          </fieldset>
          <Button
            color="primary"
            block
            size="lg"
            className="mt-2"
            onClick={e => loginHandler(e)}
          >
            Submit
          </Button>
          <Link href="/page/forgotpassword">
            <a>Forgot password</a>
          </Link>
        </Form>
      </CardBody>
    </Card>
  );
};

export default LoginPage;
