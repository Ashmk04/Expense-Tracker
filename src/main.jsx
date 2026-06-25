import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import Route from './Route.jsx'
//import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import { Dashboard } from './components/index.js'


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Route/>,
//     children:[
//       {
//         path:"",
//         element:<Dashboard/>
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
