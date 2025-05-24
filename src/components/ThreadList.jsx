import React from 'react';
import ThreadItem from './ThreadItem';

const ThreadList = ({ threads }) => {
  return (
    <div>
      {threads.map((thread) => (
        <ThreadItem key={thread.id} thread={thread} />
      ))}
    </div>
  );
};

export default ThreadList;
