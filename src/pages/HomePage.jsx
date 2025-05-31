import React, { useEffect } from 'react';
import ThreadList from '../components/ThreadList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import styled from 'styled-components';
import PageHeaderTitle from '../components/PageHeaderTitle';
import PageWrapper from '../components/PageWrapper';

const StyledAddThreadButton = styled.a.attrs({
  href: '/new',
  className: 'fixed size-12 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer bottom-10 right-10 text-white text-xl',
})``;

const HomePage = () => {
  const { threads = [], users = [], authUser = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadLists = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    isUpvoted: authUser ? thread.upVotesBy.includes(authUser.id) : false,
  }));

  return (
    <>
      {authUser ? (
        <StyledAddThreadButton>
          <i className='fa-solid fa-plus'></i>
        </StyledAddThreadButton>
      ) : null}

      <PageWrapper>
        <PageHeaderTitle>Thread Tersedia</PageHeaderTitle>
        <ThreadList threads={threadLists} />
      </PageWrapper>
    </>
  );
};

export default HomePage;
