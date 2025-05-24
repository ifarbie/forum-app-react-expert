import React from 'react';
import useInput from '../hooks/useInput';

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onLogin = (e) => {
    e.preventDefault();
    login({ email, password })
  }
  return (
    <form>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          Email
        </label>
        <input type='email' onChange={onEmailChange} value={email} placeholder='Email' name='email' id='email' className='w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300' />
      </div>

      <div className='mb-4'>
        <label htmlFor='password' className='block text-sm font-medium mb-1'>
          Password
        </label>
        <input type='password' onChange={onPasswordChange} value={password} placeholder='Password' name='password' id='password' className='w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300' />
      </div>

      <button onClick={onLogin} className='w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded p-2 text-lg font-semibold'>
        Login
      </button>
    </form>
  );
};

export default LoginInput;
