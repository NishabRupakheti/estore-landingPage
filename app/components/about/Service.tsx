const Service = () => {
    const services = [
        {
            icon: "/app/images/truck.png",
            alt: "truck",
            title: "Free and fast Delivery",
            description: "Free delivery for all orders over $140"
        },
        {
            icon: "/app/images/miniheadphone.png",
            alt: "mini headphone",
            title: "24/7 Customer Service",
            description: "Friendly 24/7 customer support"
        },
        {
            icon: "/app/images/firewall.png",
            alt: "firewall",
            title: "Money back guarantee",
            description: "We return money within 30 days"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 mb-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center max-w-xs">
                        <div className="bg-gray-300 rounded-full p-1.5 md:p-2 mb-4">
                            <div className="bg-black rounded-full p-3">
                                <img
                                    src={service.icon}
                                    alt={service.alt}
                                    className="w-6 h-6 md:w-7 md:h-7 object-contain"
                                />
                            </div>
                        </div>
                        <h2 className="text-sm md:text-base font-bold mb-1.5 uppercase">
                            {service.title}
                        </h2>
                        <p className="text-xs text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;