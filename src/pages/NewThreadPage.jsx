import React from 'react';
import AddThreadInput from '../components/AddThreadInput';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import PageHeaderTitle from '../components/PageHeaderTitle';
import PageWrapper from '../components/PageWrapper';

const NewThreadPage = () => {
  const dispatch = useDispatch();

  const onAddThread = ({ title, body, category = '' }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <PageWrapper>
      <PageHeaderTitle>Buat Thread Baru</PageHeaderTitle>

      <AddThreadInput addThread={onAddThread} />
    </PageWrapper>
  );
};

export default NewThreadPage;
