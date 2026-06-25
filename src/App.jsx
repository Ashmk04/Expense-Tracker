import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Analytics from "./pages/Analytics"
import Budgets from "./pages/Budgets"
import Wallets from "./pages/Wallets"
import Settings from "./pages/Settings"
import Routes from "./Routes"
import { useEffect, useState } from "react"
import { ThemeProvider } from "./contexts/theme"

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

  const [themeMode, setThemeMode] = useState("light")
  
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  const lightTheme =()=>{
    setThemeMode("light")
  }

useEffect(()=>{
  document.querySelector('HTML').classList.remove("light", "dark")
  document.querySelector('HTML').classList.add(themeMode)
},[themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  )
}

export default App
