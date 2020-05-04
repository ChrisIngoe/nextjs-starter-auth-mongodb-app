import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import Router from 'next/router';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  async function forgotPasswordHandler(e) {
    e.preventDefault(e);

    const body = {
      email: email,
    };

    try {
      const res = await fetch('/api/user/password/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.replace('/');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <>
      <Card className="w-25 box-shadow">
        <CardBody>
          <Form>
            <fieldset>
              <legend className="text-primary bg-gradient-primary font-weight-bold uppercase">
                <h3 className="mt-2 ml-3 text-light text-center">
                  Forgot Password
                </h3>
              </legend>
              {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
              <FormGroup>
                <Label for="email">Email address</Label>
                <Input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={e => setEmail(e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted"></small>
              </FormGroup>
            </fieldset>
            <Button
              color="primary"
              block
              size="lg"
              className="mt-2"
              onClick={e => forgotPasswordHandler(e)}
            >
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default ForgotPasswordPage;
