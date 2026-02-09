const Service = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 mb-7">
            {/* Changed flex to a responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 justify-items-center ">

                {/* Service Item 1 */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="bg-gray-300 rounded-full p-1.5 md:p-2 mb-4">
                        <div className="bg-black rounded-full p-3">
                            <img src="/app/images/truck.png" alt="truck" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
                        </div>
                    </div>
                    <h2 className="text-sm md:text-base font-bold mb-1.5 uppercase">Free and fast Delivery</h2>
                    <p className="text-xs text-gray-600">Free delivery for all orders over $140</p>
                </div>

                {/* Service Item 2 */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="bg-gray-300 rounded-full p-1.5 md:p-2 mb-4">
                        <div className="bg-black rounded-full p-3">
                            <img src="/app/images/miniheadphone.png" alt="mini headphone" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
                        </div>
                    </div>
                    <h2 className="text-sm md:text-base font-bold mb-1.5 uppercase">24/7 Customer Service</h2>
                    <p className="text-xs text-gray-600">Friendly 24/7 customer support</p>
                </div>

                {/* Service Item 3 */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="bg-gray-300 rounded-full p-1.5 md:p-2 mb-4">
                        <div className="bg-black rounded-full p-3">
                            <img src="/app/images/firewall.png" alt="firewall" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
                        </div>
                    </div>
                    <h2 className="text-sm md:text-base font-bold mb-1.5 uppercase">Money back guarantee</h2>
                    <p className="text-xs text-gray-600">We return money within 30 days</p>
                </div>

            </div>
        </div>
    );
}

export default Service