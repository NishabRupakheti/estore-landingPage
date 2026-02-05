import Catagory from "../../data/catagory"

const CatagoryBrowser = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="flex items-end justify-between mb-10">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-4 h-10 bg-red-500 rounded"></div>
                        <span className="text-red-500 font-semibold">Categories</span>
                    </div>
                    <h2 className="text-3xl font-bold">Browse By Category</h2>
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

            {/* Category Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {Catagory.map((catagory) => {
                    const Icon = catagory.icon;
                    return (
                        <div
                            key={catagory.id}
                            className="flex flex-col items-center justify-center p-6 border-2 rounded cursor-pointer transition-all duration-300 border-gray-300 bg-white text-black hover:bg-red-500 hover:border-red-500 hover:text-white group"
                        >
                            <Icon className="w-14 h-14 mb-4 transition-transform group-hover:scale-110" />
                            <span className="text-sm font-medium">{catagory.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default CatagoryBrowser