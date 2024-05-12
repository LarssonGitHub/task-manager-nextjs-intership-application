"use client"

import React from 'react'
import { useState } from 'react';
import { login } from '@/auth/loginAuthentication';

export default function LoginForm() {

      // TODO implement validation of submitted inputs

        const [formData, setFormData] = useState({
          email: "",
          password: "",})
  
        const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData({...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const done = await login(formData.email, formData.password);
          console.log("Should be done, redirect!", done)
        };
    
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={updateFormData}
          required
        />
        <br />
        <label htmlFor="message">Password:</label>
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={updateFormData}
          required
        ></input>
        <br />
        <button type="submit">Log in</button>
      </form>
  )
}
