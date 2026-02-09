const OurStory = () => {

    const storyPoints = [
        `Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Nepal.
        Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.`,
        `Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion and home goods.`
    ];
    

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Text content */}
                <div className="space-y-6">
                    <h1 className="text-5xl font-bold">Our Story</h1>

                    {
                        storyPoints.map((point, index) => (
                            <p key={index} className="text-lg text-gray-700">
                                {point}
                            </p>
                        ))
                    }
                </div>

                {/* Right side - Image */}
                <div className="relative">
                    <div className="bg-linear-to-r from-pink-300 to-pink-400 rounded-lg overflow-hidden">
                        <img
                            src="/app/images/storyimg.png"
                            alt="Our story - Happy shoppers"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory