import productDetails from "~/data/products"
import type { Product } from "~/types/product"
import { CiHeart } from "react-icons/ci"
import { CiRead } from "react-icons/ci"

const BestSellingProduct = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-5 h-10 bg-red-500 rounded"></div>
                        <span className="text-red-500 font-semibold">This Month</span>
                    </div>
                    <h2 className="text-3xl font-bold">Best Selling Products</h2>
                </div>
                <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-3 rounded transition-colors cursor-pointer">
                    View All
                </button>
            </div>

            {/* Product Grid - 4 items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {productDetails.slice(0, 4).map((product: Product) => (
                    <div key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg p-1">
                        <div className="relative bg-gray-100 rounded mb-4 p-8 flex items-center justify-center h-64 overflow-hidden">
                            <div className="absolute top-3 right-3 flex flex-col gap-2">
                                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
                                    <CiHeart size={20} />
                                </button>
                                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                                    <CiRead size={20} />
                                </button>
                            </div>
                            <img src={product.img} alt={product.name} className="max-h-40 object-contain" />
                        </div>

                        {/* Product Info */}
                        <h4 className="font-semibold mb-2">{product.name}</h4>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-red-500 font-semibold">${product.price}</span>
                            {product.originalPrice && (
                                <span className="line-through text-gray-400">${product.originalPrice}</span>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Star Rating */}
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-gray-500 text-sm">({product.reviews})</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestSellingProduct