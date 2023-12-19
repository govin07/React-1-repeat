import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
// import User from './components/user/User.jsx'
import GitHub from './components/Github/Github.jsx'

 const router =  createBrowserRouter([
   {
       path: "/",
    element: <Layout/>,
    children: [{
     path: "",
      element: <Home/>,

   },


 {    path: "about",
    element: <About/>,
  },


  {
    path: "contact us",
    element: <Contact/>
   },
  //  {
  //   path: "user/:id",
  //   element: <User/>
  //  },
{
  path: "Github",
  element: <GitHub/>
}

 ],
   }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
