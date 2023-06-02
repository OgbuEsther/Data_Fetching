import React from 'react'
import { Outlet } from 'react-router-dom'
import ReadFiles from '../../pages/ReadFiles'

const LayOut = () => {
  return (
    <div>
       
        <Outlet />
    </div>
  )
}

export default LayOut