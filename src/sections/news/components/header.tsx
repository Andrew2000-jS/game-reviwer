import React from 'react'
import SearchInput from './search-input'

function Header () {
  return (
    <header>
      <div className='text-center leading-[2.5rem]'>
        <h1 className='text-2xl font-bold'>Lorem Ipsum is simply dummy text of the printing and.</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className='mt-28'>
        <SearchInput />
      </div>
    </header>
  )
}

export default Header
