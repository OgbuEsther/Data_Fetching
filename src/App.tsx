import React from 'react'
import ReadFiles from './pages/ReadFiles'
import {RouterProvider} from "react-router-dom"
import { MainRoute } from './routes/MainRoute'
const App = () => {
  return (
    <div>
  <RouterProvider router={MainRoute} />
    </div>
  )
}

export default App