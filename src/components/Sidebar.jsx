import { Link } from "react-router-dom";

export default function Sidebar () {
    return (
        <div>
            <aside className="w-72 bg-white border-r p-4 flex flex-col">

                
                <div className="mb-6">
                    <h1 className="text-xl font-bold">
                        Daily Expense Tracker
                    </h1>
                </div>

                <button
                    className="bg-amber-700 text-white py-3 rounded-xl mb-6">
                    + Add Transaction
                </button>

                <nav className="space-y-2">
                    <Link to='/' className="block p-3 rounded-lg bg-gray-100">
                        Transactions
                    </Link>

                    <Link to='analytics' className="block p-3">

                        Analytics
                    </Link>

                    <Link to='budgets' className="block p-3">
                        Budgets
                    </Link>

                    <Link to='wallets' className="block p-3">
                        Wallets
                    </Link>

                    <Link to='settings' className="block p-3">
                        Settings
                    </Link>
                </nav>

            </aside>
        </div>
    )
}