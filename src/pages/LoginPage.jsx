import React from 'react';
import LoginInput from '../components/LoginInput';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));

    navigate('/');
  };

  return (
    <div className='max-w-[724px] mx-auto mt-12'>
      <h2 className='text-center font-medium text-3xl mb-6'>Login</h2>

      <LoginInput login={onLogin} />
      <div className='mt-3'>
        Belum punya akun? <a href="/register" className='text-blue-500 hover:underline'>Daftar di sini.</a>
      </div>
    </div>
  );
};

export default LoginPage;
