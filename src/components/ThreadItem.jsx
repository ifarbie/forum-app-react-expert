import React from 'react';
import { formatDateDistance, getTextOnly } from '../utils';

const ThreadItem = ({ thread }) => {
  return (
    <div className='py-4 border-b border-gray-500 space-y-2'>
      <div className='flex'> 
        <div className='border rounded px-2 py-1 text-xs text-gray-600'>#{thread.category}</div>
      </div>
      <div>
        <a href={`/threads/${thread.id}`} className='font-bold text-blue-500 cursor-pointer'>
          {thread.title}
        </a>
      </div>
      <div className='max-h-[120px] truncate'>
        <p className='truncate'>{getTextOnly(thread.body)}</p>
      </div>
      <div className='flex gap-4'>
        <div className='flex items-center gap-1'>
          <i className='fa-regular fa-thumbs-up'></i>
          {thread.upVotesBy.length}
        </div>
        <div className='flex items-center gap-1'>
          <i className='fa-regular fa-thumbs-down'></i>
          {thread.downVotesBy.length}
        </div>
        <div className='flex items-center gap-1'>
          <i className='fa-regular fa-comment'></i>
          {thread.totalComments}
        </div>
        <div>{formatDateDistance(thread.createdAt)}</div>
        <div>
          Dibuat oleh <b>{thread.user.name}</b>
        </div>
      </div>
    </div>
  );
};

export default ThreadItem;
