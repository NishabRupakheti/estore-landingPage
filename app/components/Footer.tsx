import { NavLink } from "react-router"


const Footer = () => {

    const quickLinks = ["Privacy Policy", "Terms of Service", "FAQ", "Contact"];
    
    const companyInfo = [
        "Emmanantie 10k, Jyvaskyla, Finland",
        "Phone: +358 44 1234567",
        "Email: support@example.com"
    ];

    return (
        <>
            <div className="bg-black text-white px-4 py-10 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Exclusive Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Exclusive</h3>
                        <h4 className="text-sm">Subscribe to our newsletter</h4>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="p-2 rounded border border-gray-600 bg-black text-white focus:outline-none focus:border-white"
                        />
                    </div>

                    {/* Support Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Support</h3>
                        {companyInfo.map((info, index) => (
                            <p key={index} className="text-sm">
                                {info}
                            </p>
                        ))}
                    </div>

                    {/* Account Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Account</h3>
                        <p className="text-sm cursor-pointer hover:underline">My Account</p>

                        <NavLink to="/signup" className="text-sm cursor-pointer hover:underline">
                            Login / Register
                        </NavLink>

                        <NavLink to="/cart" className="text-sm cursor-pointer hover:underline">
                            Cart
                        </NavLink>
                        <NavLink to="/wishlist" className="text-sm cursor-pointer hover:underline">
                            Wishlist
                        </NavLink>
                    </div>

                    {/* Quick Links Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Quick links</h3>
                        {quickLinks.map((link, index) => (
                            <p key={index} className="text-sm cursor-pointer hover:underline">
                                {link}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer