const TopLevel = () => {

  const ListItem = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Home & Lifestyle" },
    { id: 3, name: "Medicine" },
    { id: 4, name: "Sports & Outdoor" },
    { id: 5, name: "Baby's & Toys" },
    { id: 6, name: "Groceries & Pets" },
    { id: 7, name: "Health & Beauty" },
  ]

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

      {/* Right Banner Section */}
      <img src="/app/images/toplevelFrame.png" alt="topLevelBanner" />
    </div>
  )
}

export default TopLevel