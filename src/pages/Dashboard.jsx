import ChartCard from "../components/ChartCard";
import TransactionTable from "../components/TransactionTable";
import WalletCard from "../components/WalletCard";


export default function Dashboard() {
    return (
        <div>
            <main className="flex-1 p-6">

                <div className="grid grid-cols-3 gap-6">

                    <div className="col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
                        <ChartCard/>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
                        <WalletCard/>
                    </div>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow mt-6">
                    <TransactionTable/>
                </div>

            </main>
        </div>
    )
}