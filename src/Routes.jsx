import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";


export default function Routes(){
    return(
         <div className="flex h-screen">
            <Sidebar/>
            <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
                <Outlet/>
            </main>
        </div>
    )
}