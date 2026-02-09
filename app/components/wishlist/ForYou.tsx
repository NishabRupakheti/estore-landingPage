import productDetails from "~/data/products"
import type { Product } from "~/types/product"

const ForYou = () => {
    // Calculate discount percentage
    const calculateDiscount = (original: number, price: number) => {
        return Math.round(((original - price) / original) * 100)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-5 h-10 bg-red-500 rounded"></div>
                        <span className="text-red-500 font-semibold">Just For You</span>
                    </div>
                </div>
                <button className="border border-gray-300 hover:bg-gray-50 py-3 px-12 rounded cursor-pointer transition-colors">
                    See All
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {productDetails
                    .sort(() => Math.random() - 0.5) // randomly sort the product 
                    .slice(0, 4)                    // Only show the first four
                    .map((product: Product) => (
                        <div key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg p-1">
                            <div className="relative bg-gray-100 rounded mb-4 p-8 flex items-center justify-center h-64 overflow-hidden">
                                {/* Discount or NEW Badge */}
                                {product.originalPrice && (
                                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded">
                                        -{calculateDiscount(product.originalPrice, product.price)}%
                                    </span>
                                )}
                                {product.isNew && (
                                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded">
                                        NEW
                                    </span>
                                )}

                                {/* View Icon */}
                                <div className="absolute top-3 right-3">
                                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                </div>

                                <img src={product.img} alt={product.name} className="max-h-40 object-contain" />
                                <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 transition-opacity cursor-pointer">
                                    <div className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span>Add To Cart</span>
                                    </div>
                                </button>
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

export default ForYou