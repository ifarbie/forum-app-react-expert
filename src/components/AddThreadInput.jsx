import React from 'react';
import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';

const AddThreadInput = ({ addThread }) => {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  const navigate = useNavigate();

  const onAddThread = (e) => {
    e.preventDefault();
    addThread({ title, body, category });

    navigate('/');
  }

  return (
    <form>
      <div className='mb-4'>
        <input type='text' onChange={onTitleChange} value={title} placeholder='Judul' name='title' id='title' className='w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300' />
      </div>

      <div className='mb-4'>
        <input type='text' onChange={onCategoryChange} value={category} placeholder='Kategori' name='category' id='category' className='w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300' />
      </div>

      <div className='mb-4'>
        <textarea
          type='textarea'
          onChange={onBodyChange}
          value={body}
          name='body'
          id='body'
          className='w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300'
        />
      </div>

      <button onClick={onAddThread} className='w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded p-2 text-lg font-semibold'>
        Buat
      </button>
    </form>
  );
};

export default AddThreadInput;
