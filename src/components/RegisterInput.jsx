import React from 'react';
import useInput from '../hooks/useInput';

const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className='space-y-4'>
      <div>
        <label htmlFor='name' className='block text-sm font-medium mb-1'>
          Name
        </label>
        <input type='text' id='name' value={name} onChange={onNameChange} placeholder='Name' className='w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300' />
      </div>

      <div>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          Email
        </label>
        <input type='text' id='email' value={email} onChange={onEmailChange} placeholder='Email' className='w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300' />
      </div>

      <div>
        <label htmlFor='password' className='block text-sm font-medium mb-1'>
          Password
        </label>
        <input type='password' value={password} onChange={onPasswordChange} placeholder='Password' className='w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300' />
      </div>

      <button type='button' onClick={() => register({ name, email, password })} className='w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded p-2 text-lg font-semibold'>
        Register
      </button>
    </form>
  );
};

export default RegisterInput;
