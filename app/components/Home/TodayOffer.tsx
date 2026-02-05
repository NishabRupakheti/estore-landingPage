import SalesData from "../../data/sales"
import type { Sales } from "~/types/sales"

const TodayOffer = () => {
    return (
        <div className="p-10 bg-white max-w-7xl mx-auto px-4 py-16" >

            {/* header */}
            <div className="flex items-end justify-between mb-10">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-4 h-10 bg-red-500 rounded"></div>
                        <span className="text-red-500 font-semibold">Today</span>
                    </div>
                    <h2 className="text-3xl font-bold"> Flash Sales </h2>
                </div>
                <div className="flex gap-2">
                    <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* card section */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >
                {SalesData.map((item: Sales) => (
                    <div key={item.id} className="border rounded-lg p-4 flex flex-col items-center" >
                        <img src={item.img} alt={item.name} className="w-32 h-32 object-cover mb-4" />
                        <h4 className="text-lg font-semibold mb-2" >{item.name}</h4>
                        <p className="text-red-500 font-bold mb-2" >${item.finalPrice} <span className="line-through text-gray-500 text-sm" >${item.originalPrice}</span></p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.alert("Added")} >Shop Now</button>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-3 rounded transition-colors">
                    View All Products
                </button>
            </div>
        </div>
    )
}

export default TodayOffer