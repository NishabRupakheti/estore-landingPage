import { useState, useEffect } from "react"
import SalesData from "../../data/sales"
import type { Sales } from "~/types/sales"

const TodayOffer = () => {
    // time state for countdown timer
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    })

    // useEffect to handle countdown timer logic ... 

    useEffect(() => {
        const timer = setInterval(() => { // runs every second
            // setter function to update time left
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev

                if (seconds > 0) {
                    seconds--
                } else if (minutes > 0) {
                    minutes--
                    seconds = 59
                } else if (hours > 0) {
                    hours--
                    minutes = 59
                    seconds = 59
                } else if (days > 0) {
                    days--
                    hours = 23
                    minutes = 59
                    seconds = 59
                }

                return { days, hours, minutes, seconds }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])


    // we need to show discount percent in the card 
    const calculateDiscount = (original: number, final: number) => {
        return Math.round(((original - final) / original) * 100)
    }

    return (
        <div className="bg-white max-w-7xl mx-auto px-4 py-16" >

            {/* header */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
                <div className="w-full md:w-auto">
                    {/* Label Section */}
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                        <div className="w-5 h-10 bg-red-500 rounded"></div>
                        <span className="text-red-500 font-semibold">Today's</span>
                    </div>

                    {/* Title and Timer Container */}
                    <div className="flex flex-col lg:flex-row lg:items-end gap-6 md:gap-10 lg:gap-20">
                        <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap">
                            Flash Sales
                        </h2>

                        {/* Countdown Timer */}
                        <div className="flex items-center gap-3 md:gap-4 pb-1">
                            <div className="text-center">
                                <div className="text-[10px] md:text-xs font-medium mb-1">Days</div>
                                <div className="text-2xl md:text-3xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                            </div>
                            <span className="text-red-500 text-xl md:text-2xl font-bold pb-1">:</span>

                            <div className="text-center">
                                <div className="text-[10px] md:text-xs font-medium mb-1">Hours</div>
                                <div className="text-2xl md:text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                            </div>
                            <span className="text-red-500 text-xl md:text-2xl font-bold pb-1">:</span>

                            <div className="text-center">
                                <div className="text-[10px] md:text-xs font-medium mb-1">Minutes</div>
                                <div className="text-2xl md:text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                            </div>
                            <span className="text-red-500 text-xl md:text-2xl font-bold pb-1">:</span>

                            <div className="text-center">
                                <div className="text-[10px] md:text-xs font-medium mb-1">Seconds</div>
                                <div className="text-2xl md:text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons - Hidden on extra small screens or moved to side */}
                <div className="hidden sm:flex gap-2 self-end md:self-end">
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* card section */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12" >
                {SalesData.map((item: Sales) => (
                    <div key={item.id} className="group relative cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg " >
                        {/* Product Image Container */}
                        <div className="relative bg-gray-100 p-8 mb-4 flex items-center justify-center h-64">
                            {/* Discount Badge */}
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded">
                                -{calculateDiscount(item.originalPrice, item.finalPrice)}%
                            </div>

                            {/* Wishlist & View Icons */}
                            <div className="absolute top-3 right-3 flex flex-col gap-2">
                                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div>

                            <img src={item.img} alt={item.name} className="w-40 h-40 object-contain" />

                            {/* Add to Cart Button - Shows on Hover */}
                            <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer ">
                                Add To Cart
                            </button>
                        </div>

                        {/* Product Info */}
                        <div>
                            <h4 className="text-base font-medium mb-2" >{item.name}</h4>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-red-500 font-medium text-base">${item.finalPrice}</span>
                                <span className="line-through text-gray-400 text-base">${item.originalPrice}</span>
                            </div>

                            {/* Star Rating */}
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className={`w-4 h-4 ${index < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : index < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'}`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-gray-500 text-sm">({item.ratingCount})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-16">
                <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded transition-colors cursor-pointer">
                    View All Products
                </button>
            </div>
        </div>
    )
}

export default TodayOffer