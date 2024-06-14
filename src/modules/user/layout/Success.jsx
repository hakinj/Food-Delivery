import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Success() {
  return (
    <>
    <div className='flex flex-column items-center mt-80 mb-20 h-96'>
     <CheckCircleIcon sx={{ fontSize: 60 }} color="success" />
      <p className=''>Payment Successful.</p>
     </div>
    </>
  )
}

export default Success