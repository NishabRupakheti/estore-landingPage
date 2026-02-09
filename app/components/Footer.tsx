import { NavLink } from "react-router"


const Footer = () => {
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
                        {['Emmanantie 10k, Jyvaskyla, Finland', 'Phone: +358 44 1234567', 'Email: support@example.com'].map((info, index) => (
                            <p key={index} className="text-sm">{info}</p>
                        ))}
                    </div>

                    {/* Account Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Account</h3>
                        <p className="text-sm cursor-pointer hover:underline">My Account</p>
                        {[
                            { to: '/signup', label: 'Login / Register' },
                            { to: '/cart', label: 'Cart' },
                            { to: '/wishlist', label: 'Wishlist' }
                        ].map((link) => (
                            <NavLink key={link.to} to={link.to} className="text-sm cursor-pointer hover:underline">
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Quick Links Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Quick links</h3>
                        {['Privacy Policy', 'Terms of Service', 'FAQ', 'Contact'].map((link) => (
                            <p key={link} className="text-sm cursor-pointer hover:underline">
                                {link}
                            </p>
                        ))}
                    </div>

                    {/* Download App Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Download App</h3>
                        <p className="text-xs text-gray-400">Save $3 with App New User Only</p>

                        {/* QR Code and App Store Buttons */}
                        <div className="flex gap-2">
                            {/* QR Code */}
                            <div className="bg-white p-1 rounded">
                                <img src="/app/images/qrcode.png" alt="QR code" className="w-20 h-20" />
                            </div>

                            {/* App Store Buttons */}
                            <div className="flex flex-col gap-2">
                                <img src="/app/images/gplay.png" alt="Get it on Google Play" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
                                <img src="/app/images/appstore.png" alt="Download on the App Store" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-6 mt-2">
                            {[
                                { src: '/app/images/Icon-Facebook.png', alt: 'Facebook' },
                                { src: '/app/images/icontwitter.png', alt: 'Twitter' },
                                { src: '/app/images/icon-instagram.png', alt: 'Instagram' },
                                { src: '/app/images/Icon-Linkedin.png', alt: 'LinkedIn' }
                            ].map((social) => (
                                <img
                                    key={social.alt}
                                    src={social.src}
                                    alt={social.alt}
                                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer