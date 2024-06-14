import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';





function Progressbar() {
  return (
    <>
    
     <div className='flex flex-column items-center mt-80 mb-20 h-96'>
     <CircularProgress />
      <p className=''>Payment Loading....</p>
     </div>
    
    </>
  )
}

export default Progressbar