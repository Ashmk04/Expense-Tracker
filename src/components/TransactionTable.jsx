

export default function TransactionTable() {
    return (
        <div>
            <table className="w-full mt-6">

                <thead>
                    <tr className="border-b">
                        <th className="text-left py-3">
                            Category
                        </th>

                        <th className="text-left py-3">
                            Amount
                        </th>

                        <th className="text-left py-3">
                            Date
                        </th>
                    </tr>
                </thead>

                <tbody>

                    <tr className="border-b">
                        <td className="py-4">
                            Food & Drink
                        </td>

                        <td className="text-red-500">
                            -₹250
                        </td>

                        <td>
                            24 Jun 2026
                        </td>
                    </tr>

                </tbody>

            </table>
        </div>
    )
}