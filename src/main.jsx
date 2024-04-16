import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ToastContainer, toast } from 'react-toastify';

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Shared/Routes.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
    {/* <ToastContainer /> */}
    </AuthProviders>
  </React.StrictMode>,
)
