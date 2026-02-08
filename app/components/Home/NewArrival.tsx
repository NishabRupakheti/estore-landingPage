
import NewArrivals from "../../data/NewArrival"

const NewArrival = () => {
    return (
        <div className="bg-white max-w-7xl mx-auto px-4 py-16">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-4 h-10 bg-red-500 rounded"></div>
                <span className="text-red-500 font-semibold">Featured</span>
            </div>
            <h2 className="text-4xl font-bold mb-12">New Arrival</h2>

            {/* Featured Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-150">
                {/* Left Column - PlayStation 5 (Takes full height) */}
                <div className="relative bg-black rounded overflow-hidden group">
                    <img 
                        src={NewArrivals[0].img} 
                        alt={NewArrivals[0].name} 
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute bottom-8 left-8 text-white max-w-md">
                        <h3 className="text-2xl font-semibold mb-4">{NewArrivals[0].name}</h3>
                        <p className="text-sm mb-4 text-gray-300">
                            Black and White version of the PS5 coming out on sale.
                        </p>
                        <button className="text-white font-medium underline underline-offset-4 hover:text-gray-300 transition-colors cursor-pointer">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Right Column - 3 sections */}
                <div className="flex flex-col gap-8">
                    {/* Women's Collections (Takes 1/2 height) */}
                    <div className="relative bg-black rounded overflow-hidden h-[48%] group">
                        <img 
                            src={NewArrivals[1].img} 
                            alt={NewArrivals[1].name} 
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute bottom-6 left-8 text-white max-w-sm">
                            <h3 className="text-2xl font-semibold mb-3">Women's Collections</h3>
                            <p className="text-sm mb-3 text-gray-300">
                                Featured women collections that give you another vibe.
                            </p>
                            <button className="text-white font-medium underline underline-offset-4 hover:text-gray-300 transition-colors cursor-pointer ">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    {/* Bottom Row - Speakers and Perfume */}
                    <div className="grid grid-cols-2 gap-8 h-[48%]">
                        {/* Speakers */}
                        <div className="relative bg-black rounded overflow-hidden group">
                            <img 
                                src={NewArrivals[2].img} 
                                alt={NewArrivals[2].name} 
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-xl font-semibold mb-2">Speakers</h3>
                                <p className="text-xs mb-2 text-gray-300">
                                    Amazon wireless speakers
                                </p>
                                <button className="text-white font-medium text-sm underline underline-offset-4 hover:text-gray-300 transition-colors cursor-pointer">
                                    Shop Now
                                </button>
                            </div>
                        </div>

                        {/* Perfume */}
                        <div className="relative bg-black rounded overflow-hidden group">
                            <img 
                                src={NewArrivals[3].img} 
                                alt={NewArrivals[3].name} 
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-xl font-semibold mb-2">Perfume</h3>
                                <p className="text-xs mb-2 text-gray-300">
                                    GUCCI INTENSE OUD EDP
                                </p>
                                <button className="text-white font-medium text-sm underline underline-offset-4 hover:text-gray-300 transition-colors">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrival