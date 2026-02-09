import { useState, useEffect } from "react"

const TopLevel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4

  const ListItem = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Home & Lifestyle" },
    { id: 3, name: "Medicine" },
    { id: 4, name: "Sports & Outdoor" },
    { id: 5, name: "Baby's & Toys" },
    { id: 6, name: "Groceries & Pets" },
    { id: 7, name: "Health & Beauty" },
  ]

  // to change the slide of carousel 
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="flex gap-8 max-w-7xl mx-auto px-4 py-8">
      {/* Left Sidebar - Categories (Hidden on mobile) */}
      <div className="w-56 shrink-0 hidden lg:block border-r border-gray-300 pr-8">
        <ul className="space-y-4">
          <li className="flex justify-between items-center cursor-pointer hover:underline">
            <span>Woman's Fashion</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li className="flex justify-between items-center cursor-pointer hover:underline">
            <span>Men's Fashion</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          {
            ListItem.map((item) => (
              <li key={item.id} className="flex justify-between items-center cursor-pointer hover:underline">
                <span>{item.name}</span>
              </li>
            ))
          }
        </ul>
      </div>

      {/* Right Banner Section - Carousel */}
      <div className="flex-1 relative bg-black rounded overflow-hidden">
        {/* Slides Container */}
        <div className="relative h-87.5">
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-center justify-between px-16 py-12 h-full">
                {/* Left Content */}
                <div className="text-white z-10 max-w-md">
                  <div className="flex items-center gap-6 mb-5">
                    <img src="/app/images/applelogo.png" alt="Apple logo" className="w-10 h-10" />
                    <span className="text-base">iPhone 14 Series</span>
                  </div>
                  
                  <h1 className="text-5xl font-semibold leading-tight mb-5">
                    Up to 10%<br />
                    off Voucher
                  </h1>
                  
                  <button className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity underline underline-offset-4">
                    <span>Shop Now</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                {/* Right Image */}
                <div className="z-10">
                  <img src="/app/images/topframeIphone.png" alt="iPhone 14" className="h-75 object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                currentSlide === index ? 'bg-red-500' : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default TopLevel