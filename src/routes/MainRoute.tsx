import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import ReadFiles from '../pages/ReadFiles'

export const MainRoute = createBrowserRouter(
    [
        {
            path : "/",
            element : <ReadFiles />
        }
    ]
)

