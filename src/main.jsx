import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import Github from './component/Github/Github.jsx'
const router=createBrowserRouter(
  [
    {
    path :'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
         path:"about",
         element:<About/>
      },
      {
         path:"contact",
         element:<Contact/>
      },
      {
         path:"github",
         element:<Github/>
      }
    ]
    }
   
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
