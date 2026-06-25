

export default function Filters() {
    return (
        <div>
            <div className="flex gap-4 flex-wrap">

                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-lg px-4 py-2"
                />

                <select className="border rounded-lg px-4 py-2">
                    <option>All Types</option>
                </select>

                <select className="border rounded-lg px-4 py-2">
                    <option>All Categories</option>
                </select>

            </div>
        </div>
    )
}