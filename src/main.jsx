import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import rouets from './routes/Routes.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={rouets}></RouterProvider>
  </StrictMode>,
)
