import React from 'react';
import useInput from '../hooks/useInput';

const AddThreadInput = ({ addThread }) => {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [content, onContentChange] = useInput('');

  return (
    <form>
      <div className='mb-4'>
        <input type='text' onChange={onTitleChange} value={title} placeholder='Title' name='title' id='title' className='w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300' />
      </div>

      <div className='mb-4'>
        <input type='text' onChange={onCategoryChange} value={category} placeholder='Category' name='category' id='category' className='w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300' />
      </div>

      <div className='mb-4'>
        <textarea
          type='textarea'
          onChange={onContentChange}
          value={content}
          placeholder='Content'
          name='content'
          id='content'
          className='w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300'
        />
      </div>

      <button onClick={addThread} className='w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded p-2 text-lg font-semibold'>
        Buat
      </button>
    </form>
  );
};

export default AddThreadInput;
