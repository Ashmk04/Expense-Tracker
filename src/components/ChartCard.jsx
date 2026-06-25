

export default function ChartCard() {
    return (
        <div>
            <div className="bg-white rounded-2xl shadow p-6">
                <div className="flex justify-between mb-4">

                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-gray-100 rounded-lg">
                            Day
                        </button>

                        <button className="px-4 py-2">
                            Week
                        </button>
                    </div>

                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                        ₹4,750 left
                    </div>

                </div>

                <div className="h-72 bg-gray-50 rounded-xl">
                    Chart Here
                </div>
            </div>
        </div>
    )
}