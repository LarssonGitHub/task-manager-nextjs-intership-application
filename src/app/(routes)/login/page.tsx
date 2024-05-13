import React from 'react';
import LoginForm from '@/components/forms/LoginForm';

export default function Page() {
  return (
    <main>
      <h1>
        Glad to see you again Ready to join your team?
      </h1>
      <p>
        Please, log in to continue
      </p>
      <LoginForm />
      <p>
        Wait? You don't have a password and username? Well, here you go, pick one!
      </p>
      <ul>
        <li>
          <strong>Email:</strong> admin1@email.com, <strong>Password:</strong> passw0rd
        </li>
        <li>
          <strong>Email:</strong> tester1@email.com <strong>Password:</strong> passw0rd
        </li>
      </ul>
    </main>
  );
}
