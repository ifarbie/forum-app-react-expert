import React from 'react';
import RegisterInput from '../components/RegisterInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/login');
  };

  return (
    <div className='max-w-[724px] mx-auto mt-12'>
      <h2 className='text-center font-medium text-3xl mb-6'>Register</h2>

      <RegisterInput register={onRegister} />
    </div>
  );
};

export default RegisterPage;
