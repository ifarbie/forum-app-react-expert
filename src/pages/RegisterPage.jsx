import React from 'react';
import RegisterInput from '../components/RegisterInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import PageHeaderTitle from '../components/PageHeaderTitle';
import PageWrapper from '../components/PageWrapper';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/login');
  };

  return (
    <PageWrapper>
      <PageHeaderTitle>Register</PageHeaderTitle>

      <RegisterInput register={onRegister} />

      <div className='mt-4'>Sudah Punya Akun? <a href="/login" className='text-blue-500 hover:underline'>Login di sini.</a></div>
    </PageWrapper>
  );
};

export default RegisterPage;
