"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import GenericInput from '../inputs/GenericInput';
import { login } from '@/auth/loginAuthentication';
import { handleError } from '@/lib/utils/handleError';

export default function LoginForm() {
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }; 

  const validateLogin = async (email:string, password:string) => {
    return await login(email, password);
  }

  const redirectUserTpDashboard = () => {
    router.push(`/`);
  }

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const loginSuccessful = await validateLogin(formData.email, formData.password);
      if (!loginSuccessful) return null;
      redirectUserTpDashboard();
    } catch (error) {
      handleError(error)
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <GenericInput inputs={"email"} handleChange={updateFormData} />
      <GenericInput inputs={"password"} handleChange={updateFormData} />
      <button type="submit">Log in now!</button>
    </form>
  );
}