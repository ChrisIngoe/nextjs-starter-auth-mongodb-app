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

const ResetPasswordPage = ({ token }) => {
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  async function resetPasswordHandler(e) {
    e.preventDefault(e);

    const body = {
      password: password,
      token,
    };

    try {
      const res = await fetch('/api/user/password/reset', {
        method: 'PUT',
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
                  Set New Password
                </h3>
              </legend>
              {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
              <FormGroup>
                <Label for="password">New Password</Label>
                <Input
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="passwordHelp"
                  onChange={e => setPassword(e.target.value)}
                />
                <small
                  id="passwordHelp"
                  className="form-text text-muted"
                ></small>
              </FormGroup>
            </fieldset>
            <Button
              color="primary"
              block
              size="lg"
              className="mt-2"
              onClick={e => resetPasswordHandler(e)}
            >
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default ResetPasswordPage;
