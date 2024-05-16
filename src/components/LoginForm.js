import { Button, Input, Spacer } from '@nextui-org/react';
import React from 'react';

export function LoginForm({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    onSubmit(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-center">Login</h3>
      <Spacer y={1} />
      <Input
        name="email"
        clearable
        underlined
        fullWidth
        color="primary"
        size="lg"
        placeholder="Email"
        defaultValue="grailians@gmail.com"
      />
      <Spacer y={1.5} />
      <Input
        name="password"
        clearable
        underlined
        fullWidth
        color="primary"
        size="lg"
        placeholder="Password"
        type="password"
        defaultValue="password"
      />
      <Spacer y={1.5} />
      <Button shadow color="primary" auto type="submit">
        Sign in
      </Button>
    </form>
  );
}
