const TopLevel = () => {
  return (
    <div className="flex gap-8 max-w-7xl mx-auto px-4 py-8">
      {/* Left Sidebar - Categories */}
      <div className="w-56 shrink-0">
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
          <li className="cursor-pointer hover:underline">Electronics</li>
          <li className="cursor-pointer hover:underline">Home & Lifestyle</li>
          <li className="cursor-pointer hover:underline">Medicine</li>
          <li className="cursor-pointer hover:underline">Sports & Outdoor</li>
          <li className="cursor-pointer hover:underline">Baby's & Toys</li>
          <li className="cursor-pointer hover:underline">Groceries & Pets</li>
          <li className="cursor-pointer hover:underline">Health & Beauty</li>
        </ul>
      </div>

      {/* Right Banner Section */}
      <div className="flex-1 relative">
        <div className="bg-black text-white rounded-sm overflow-hidden flex items-center justify-between px-16 py-12 min-h-85">
          {/* Left Content */}
          <div className="flex flex-col gap-5 z-10">
            <div className="flex items-center gap-6">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="text-sm">iPhone 14 Series</span>
            </div>
            <h2 className="text-5xl font-semibold leading-tight">
              Up to 10%<br />off Voucher
            </h2>
            <button className="flex items-center gap-2 text-white hover:opacity-80 underline underline-offset-8">
              <span>Shop Now</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative z-10">
            <img src="/app/images/phone.png" alt="iPhone 14 Series" className="w-80 h-auto" />
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-4">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  )
}

export default TopLevel