import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Analytics from "./pages/Analytics"
import Budgets from "./pages/Budgets"
import Wallets from "./pages/Wallets"
import Settings from "./pages/Settings"
import Routes from "./Routes"


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Routes/>,
      children:[
        {
          path:"",
          element:<Layout/>
        },
        {
          path:"analytics",
          element:<Analytics/>
        },
        {
          path:"budgets",
          element:<Budgets/>
        },
        {
          path:"wallets",
          element:<Wallets/>
        },
        {
          path:"settings",
          element:<Settings/>
        },
      ]

    },
   
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
