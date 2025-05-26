import React, { useEffect } from 'react';
import ThreadList from '../components/ThreadList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

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
        <a href='/new' className='fixed size-12 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer bottom-10 right-10 text-white text-xl'>
          <i class='fa-solid fa-plus'></i>
        </a>
      ) : null}

      <div className='max-w-[724px] mx-auto mt-12'>
        <h2 className='text-center font-medium text-3xl mb-6'>Thread Tersedia</h2>

        <ThreadList threads={threadLists} />
      </div>
    </>
  );
};

export default HomePage;
