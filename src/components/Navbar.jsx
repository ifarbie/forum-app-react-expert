import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUnsetAuthUser } from '../states/authUser/action';

const Navbar = () => {
  const { authUser = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <div className='bg-gray-800 text-white px-9 py-6'>
      <div className='max-w-[1444px] mx-auto flex justify-between'>
        <h1 className='font-bold text-2xl'>FORUM APP REACT EXPERT</h1>
        <nav>
          <ul className='flex gap-10 font-medium'>
            <li>
              <a href='/'>Home</a>
            </li>
            {authUser ? (
              <li className='flex items-center gap-2'>
                <img className='size-6 rounded-full' src={authUser.avatar} alt='' />
                <a href='/' onClick={onLogout}>
                  Logout
                </a>
              </li>
            ) : (
              <>
                <li>
                  <a href='/login'>Login</a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
