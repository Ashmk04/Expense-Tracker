import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


export default function Routes(){
    return(
         <div className="flex h-screen  bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
            <Header/>
            <Sidebar/>
            <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
                <Outlet/>
            </main>
        </div>
    )
}