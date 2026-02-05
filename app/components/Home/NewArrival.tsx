
import NewArrivals from "../../data/NewArrival"

const NewArrival = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-5 h-10 bg-red-500 rounded"></div>
                <span className="text-red-500 font-semibold">Featured</span>
            </div>
            <h2 className="text-3xl font-bold">New Arrivals</h2>

            {/* Placeholder for New Arrival Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                {NewArrivals.map((item) => (
                    <div key={item.id} className="border p-4 rounded hover:shadow-lg transition-shadow">
                        <img src={item.img} alt={item.name} className="w-full h-48 object-contain mb-4" />
                        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default NewArrival