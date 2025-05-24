import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import { formatDateDistance } from '../utils';

const DetailPage = () => {
  const { id } = useParams();

  const { threadDetail = null, authUser = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) {
    return null;
  }

  console.log(threadDetail.comments);

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
        <h3 className='font-medium text-xl'>Komentar ({threadDetail.comments.length})</h3>
        {threadDetail.comments.map((comment) => (
          <div key={comment.id} className='mt-4 border-b border-gray-400 py-3'>
            <div className='flex gap-2 items-center justify-between'>
              <div className='flex gap-1 items-center'>
                <img className='size-5 rounded-full' src={comment.owner.avatar} alt='' /> {comment.owner.name}
              </div>
              <div>
                {formatDateDistance(comment.createdAt)}
              </div>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
