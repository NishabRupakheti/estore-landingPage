import { ServicesData } from "~/data/about/Services";

const Service = () => {

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 justify-items-center">
                {ServicesData.map((service, index) => (
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