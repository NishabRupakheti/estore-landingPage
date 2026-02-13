import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold">
          <NavLink to="/" className="text-gray-900 hover:text-gray-700 transition-colors">
            Exclusive
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8">
          {[
            { to: "/", label: "Home" },
            { to: "/contact", label: "Contact" },
            { to: "/about", label: "About" },
            { to: "/signup", label: "Sign Up" }
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline hover:underline-offset-4"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Search and Icons */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="relative flex items-center">
            <input
              suppressHydrationWarning
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 px-4 py-2 pr-10 rounded text-sm outline-none focus:ring-1 focus:ring-gray-300 w-48 lg:w-auto"
            />
            <CiSearch size={20} className="absolute right-3 text-gray-600" />
          </div>
          <NavLink to="/wishlist" >
            <CiHeart size={28} className="cursor-pointer hover:text-red-500 transition-colors" />
          </NavLink>
          <NavLink to="/cart" >
            <CiShoppingCart size={28} className="cursor-pointer hover:text-blue-500 transition-colors" />
          </NavLink>
          <VscAccount size={28} className="cursor-pointer hover:text-green-500 transition-colors" />
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-4">
          <CiSearch
            size={24}
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <NavLink to="/wishlist" >
            <CiHeart size={28} className="cursor-pointer hover:text-red-500 transition-colors" />
          </NavLink>
          <NavLink to="/cart" >
            <CiShoppingCart size={28} className="cursor-pointer hover:text-blue-500 transition-colors" />
          </NavLink>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1"
          >
            {isMobileMenuOpen ? <IoClose size={28} /> : <CiMenuBurger size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="relative flex items-center">
            <input
              suppressHydrationWarning
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-gray-100 px-4 py-2 pr-10 rounded text-sm outline-none focus:ring-1 focus:ring-gray-300"
            />
            <CiSearch size={20} className="absolute right-3 text-gray-600" />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {[
              { to: "/", label: "Home" },
              { to: "/contact", label: "Contact" },
              { to: "/about", label: "About" },
              { to: "/signup", label: "Sign Up" }
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 py-2" : "hover:underline hover:underline-offset-4 py-2"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar