import React from 'react'
import AddThreadInput from '../components/AddThreadInput'

const NewThreadPage = () => {
  return (
    <div className='max-w-[724px] mx-auto mt-12'>
        <h2 className='text-center font-medium text-3xl mb-6'>Buat Thread Baru</h2>

        <AddThreadInput />
    </div>
  )
}

export default NewThreadPage