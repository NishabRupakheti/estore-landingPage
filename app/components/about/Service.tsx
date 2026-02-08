const Service = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Changed flex to a responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 justify-items-center">

                {/* Service Item 1 */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="bg-gray-300 rounded-full p-2 md:p-3 mb-6">
                        <div className="bg-black rounded-full p-4">
                            <img src="/app/images/truck.png" alt="truck" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                        </div>
                    </div>
                    <h2 className="text-base md:text-lg font-bold mb-2 uppercase">Free and fast Delivery</h2>
                    <p className="text-sm text-gray-600">Free delivery for all orders over $140</p>
                </div>

                {/* Service Item 2 */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="bg-gray-300 rounded-full p-2 md:p-3 mb-6">
                        <div className="bg-black rounded-full p-4">
                            <img src="/app/images/miniheadphone.png" alt="mini headphone" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                        </div>
                    </div>
                    <h2 className="text-base md:text-lg font-bold mb-2 uppercase">24/7 Customer Service</h2>
                    <p className="text-sm text-gray-600">Friendly 24/7 customer support</p>
                </div>

                {/* Service Item 3 */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="bg-gray-300 rounded-full p-2 md:p-3 mb-6">
                        <div className="bg-black rounded-full p-4">
                            <img src="/app/images/firewall.png" alt="firewall" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                        </div>
                    </div>
                    <h2 className="text-base md:text-lg font-bold mb-2 uppercase">Money back guarantee</h2>
                    <p className="text-sm text-gray-600">We return money within 30 days</p>
                </div>

            </div>
        </div>
    );
}

export default Service