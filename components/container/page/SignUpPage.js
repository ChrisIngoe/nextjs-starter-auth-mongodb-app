import React, { useState, useEffect } from 'react';
import Router from 'next/router';
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

const SignUpPage = () => {
  const [user, { mutate }] = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (user) Router.replace('/');
  }, [user]);

  const signUpHandler = async e => {
    e.preventDefault();
    const body = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 201) {
        const userObj = await res.json();
        mutate(userObj);
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <Card className="w-25 box-shadow">
      <CardBody>
        <Form action="/page/profile" method="POST">
          <fieldset>
            <legend className="text-primary bg-gradient-primary font-weight-bold uppercase">
              <h3 className="mt-2 ml-3 text-light text-center">Sign Up</h3>
            </legend>
            {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
                onChange={e => setName(e.target.value)}
              />
              <small id="nameHelp" className="form-text text-muted"></small>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                className="form-control"
                id="email"
                onChange={e => setEmail(e.target.value)}
              />
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
          </fieldset>
          <Button
            color="primary"
            block
            size="lg"
            className="mt-2"
            onClick={e => signUpHandler(e)}
          >
            Sign Up
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default SignUpPage;
