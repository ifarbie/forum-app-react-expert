import React from 'react';
import { formatDateDistance } from '../utils';

const ThreadItem = ({ thread }) => {
  console.log(thread);
  return (
    <div className='py-4 border-b border-gray-500'>
      <a href={`/threads/${thread.id}`} className='font-bold text-blue-500 cursor-pointer'>
        {thread.title}
      </a>
      <div className='max-h-[120px] truncate'>
        <p className='truncate' dangerouslySetInnerHTML={{ __html: thread.body }}></p>
      </div>
      <div className='flex gap-4'>
        <div>
          <i className='fa-regular fa-thumbs-up'></i>
        </div>
        <div>
          <i className='fa-regular fa-thumbs-down'></i>
        </div>
        <div className='flex items-center gap-1'>
          <i class='fa-regular fa-comment'></i>
          {thread.totalComments}
        </div>
        <div>
          {formatDateDistance(thread.createdAt)}
        </div>
        <div>Dibuat oleh <b>{thread.user.name}</b></div>
      </div>
      {/* <div className='flex gap-2'>
        <i className='fa-solid fa-thumbs-up'></i>
        <i className='fa-solid fa-thumbs-down'></i>
      </div> */}
    </div>
  );
};

export default ThreadItem;
