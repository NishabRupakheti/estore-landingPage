const Service = () => {

    const SERVICES = [
        {
            img: "/app/images/truck.png",
            title: "Free and fast Delivery",
            desc: "Free delivery for all orders over $140",
        },
        {
            img: "/app/images/miniheadphone.png",
            title: "24/7 Customer Service",
            desc: "Friendly 24/7 customer support",
        },
        {
            img: "/app/images/firewall.png",
            title: "Money back guarantee",
            desc: "We return money within 30 days",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 justify-items-center">
                {SERVICES.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center max-w-xs">
                        <div className="bg-gray-300 rounded-full p-2 md:p-3 mb-6">
                            <div className="bg-black rounded-full p-4">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                />
                            </div>
                        </div>
                        <h2 className="text-base md:text-lg font-bold mb-2 uppercase">
                            {service.title}
                        </h2>
                        <p className="text-sm text-gray-600">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service