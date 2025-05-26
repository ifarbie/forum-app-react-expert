import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncAddComment, asyncReceiveThreadDetail } from '../states/threadDetail/action';
import { formatDateDistance } from '../utils';
import useInput from '../hooks/useInput';

const DetailPage = () => {
  const [comment, onCommentChange] = useInput('');

  const { id } = useParams();

  const { threadDetail = null, authUser = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddComment = (e) => {
    e.preventDefault();
    dispatch(asyncAddComment({ threadId: id, content: comment }));
  }

  if (!threadDetail) {
    return null;
  }

  return (
    <div className='max-w-[724px] mx-auto mt-12'>
      <h2 className=' font-medium text-3xl mb-6'>{threadDetail.title}</h2>
      <p>{threadDetail.body}</p>
      <div className='flex gap-2 items-center'>
        <i className='fa-regular fa-thumbs-up'></i>
        <i className='fa-regular fa-thumbs-down'></i>
        Dibuat oleh <img className='size-5 rounded-full' src={threadDetail.owner.avatar} alt='' />
        <div>{threadDetail.owner.name}</div>
      </div>

      <div className='mt-10'>
        <h3 className='font-medium text-xl'>Beri komentar</h3>
        {authUser ? (
          <form>
            <textarea
              type='textarea'
              onChange={onCommentChange}
              value={comment}
              placeholder='Comment'
              name='comment'
              id='comment'
              className='w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300'
            />
            <button type='button' onClick={onAddComment} className='w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded p-2 text-lg font-semibold'>Kirim</button>
          </form>
        ) : (
          <div className='mt-2'>
            <a href='/login' className='text-blue-500 hover:underline'>
              Login
            </a>{' '}
            untuk memberi komentar
          </div>
        )}
      </div>

      <div className='mt-10'>
        <h3 className='font-medium text-xl'>Komentar ({threadDetail?.comments?.length})</h3>
        {threadDetail?.comments?.map((comment) => (
          <div key={comment.id} className='mt-4 border-b border-gray-400 py-3'>
            <div className='flex gap-2 items-center justify-between'>
              <div className='flex gap-1 items-center'>
                <img className='size-5 rounded-full' src={comment.owner.avatar} alt='' /> {comment.owner.name}
              </div>
              <div>{formatDateDistance(comment.createdAt)}</div>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
