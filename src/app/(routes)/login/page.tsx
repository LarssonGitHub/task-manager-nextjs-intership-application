import React from 'react';
import LoginForm from '@/components/forms/LoginForm';

export default function Page() {
  return (
    <main>
      <h1>Glad to see you again Ready to join your team?</h1>
      <p>Please, log in to continue</p>
      <LoginForm />
      <p>
        Wait? You don't have a password and username? Well, here you go Pick one,
        but don't tell the boss Or edit the mock database, works too!
      </p>
      <pre>Enter password and users here _____</pre>
    </main>
  );
}
