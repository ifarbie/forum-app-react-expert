import React from 'react';
import LoginInput from '../components/LoginInput';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import PageHeaderTitle from '../components/PageHeaderTitle';
import PageWrapper from '../components/PageWrapper';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <PageWrapper>
      <PageHeaderTitle>Login</PageHeaderTitle>

      <LoginInput login={onLogin} />
      <div className='mt-3'>
        Belum punya akun? <a href="/register" className='text-blue-500 hover:underline'>Daftar di sini.</a>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;
