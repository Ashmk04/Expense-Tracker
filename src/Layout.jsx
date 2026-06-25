import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";


export default function Layout() {
    return (
        <div className="bg-gray-100">
            
                <div className="flex h-screen">

                    {/* <aside className="w-72 bg-white border-r">
                        <Sidebar/>
                    </aside> */}

                    <main className="flex-1 p-6 overflow-y-auto">
                        <Dashboard/>
                    </main>

                </div>
        </div>
    )
}