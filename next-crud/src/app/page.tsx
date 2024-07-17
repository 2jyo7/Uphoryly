import MusicPage from '@/components/MusicPage ';
import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

const Home = () => {
 return (
    <div>
      <ToastContainer position='top-center' />
      <MusicPage />
</div>
  )
}

export default Home;