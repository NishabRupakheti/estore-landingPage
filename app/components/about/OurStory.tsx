const OurStory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
                <h1 className="text-5xl font-bold">Our Story</h1>
                
                <p className="text-gray-700 leading-relaxed">
                    Launced in 2015, Exclusive is South Asia's premier online shopping 
                    makterplace with an active presense in Bangladesh. Supported 
                    by wide range of tailored marketing, data and service solutions, 
                    Exclusive has 10,500 sallers and 300 brands and serves 3 
                    millioons customers across the region.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                    Exclusive has more than 1 Million products to offer, growing at a 
                    very fast. Exclusive offers a diverse assotment in categories 
                    ranging  from consumer.
                </p>
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