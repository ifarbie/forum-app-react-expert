import React from 'react';
import AddThreadInput from '../components/AddThreadInput';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import { useNavigate } from 'react-router-dom';

const NewThreadPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onAddThread = ({ title, body, category = '' }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <div className='max-w-[724px] mx-auto mt-12'>
      <h2 className='text-center font-medium text-3xl mb-6'>Buat Thread Baru</h2>

      <AddThreadInput addThread={onAddThread} />
    </div>
  );
};

export default NewThreadPage;
