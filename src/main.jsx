import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ToastContainer, toast } from 'react-toastify';

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Shared/Routes.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <HelmetProvider>
    <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>,
)
