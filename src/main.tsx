import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CompanyProvider } from './providers/CompanyContext.tsx'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CompanyProvider>
      <App />
      <ToastContainer
       position="top-right"
       autoClose={3000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light" 
      />
    </CompanyProvider>
  </React.StrictMode>,

)
