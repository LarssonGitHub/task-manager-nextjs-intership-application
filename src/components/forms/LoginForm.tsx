"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import GenericInput from '../inputs/GenericInput';
import { login } from '@/auth/loginAuthentication';

export default function LoginForm() {
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const loginSuccessful = await login(formData.email, formData.password);
      if (!loginSuccessful) return null
      router.push(`/dashboard`);
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <GenericInput inputs={"email"} handleChange={updateFormData} />
      <GenericInput inputs={"password"} handleChange={updateFormData} />
      <button type="submit">Log in now!</button>
    </form>
  );
}
