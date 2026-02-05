import products from "../../data/products"
import { CiHeart } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import type { Product } from "../../types/product"; // need to tell typescript about the type of product to avoid error when mapping through products data

const ExploreProduct = () => {

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-5 h-10 bg-red-500 rounded"></div>
                        <span className="text-red-500 font-semibold">Our Products</span>
                    </div>
                    <h2 className="text-3xl font-bold">Explore Our Products</h2>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {products.map((product: Product) => (
                    <div key={product.id} className="group">
                        <div className="relative bg-gray-100 rounded mb-4 p-8 flex items-center justify-center h-64 overflow-hidden">
                            {product.isNew && (
                                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded">
                                    NEW 
                                </span>
                            )}
                            <div className="absolute top-3 right-3 flex flex-col gap-2">
                                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                                    <CiHeart size={20} />
                                </button>
                                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                                    <CiRead size={20} />
                                </button>
                            </div>
                            <img src={product.img} alt={product.name} className="max-h-40 object-contain" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 cursor-pointer hover:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
                                Add To Cart
                            </div>
                        </div>

                        {/* Product Info */}
                        <h4 className="font-semibold mb-2">{product.name}</h4>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-red-500 font-semibold">${product.price}</span>
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
                                            {/* shape of the star */}
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /> 
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-gray-500 text-sm">({product.reviews})</span>
                            </div>
                        </div>
                        {product.colors && (
                            <div className="flex gap-2">
                                {product.colors.map((color: string, idx: number) => (
                                    <button 
                                        key={idx}
                                        className="w-5 h-5 rounded-full border-2 border-gray-300 hover:border-gray-600"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-3 rounded transition-colors">
                    View All Products
                </button>
            </div>
        </div>
    )
}

export default ExploreProduct