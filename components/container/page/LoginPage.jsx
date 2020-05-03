import React, { memo, useState, useContext } from 'react';
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
import UserContext from '../../../components/hooks/userContext';

const LoginPage = memo(props => {
  const { isOpen, toggle } = props;
  const { signIn } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const loginHandler = async e => {
    e.preventDefault();
    //signIn(username, password);
    const body = {
      username: username,
      password: password,
    };
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push('/');
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
            <FormGroup>
              <Label for="exampleInputEmail3">Email address</Label>
              <Input
                type="email"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                onChange={e => setUsername(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </FormGroup>
            <FormGroup>
              <Label for="exampleInputPassword3">Password</Label>
              <Input
                type="password"
                className="form-control"
                id="exampleInputPassword3"
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
        </Form>
      </CardBody>
    </Card>
  );
});

export default LoginPage;
