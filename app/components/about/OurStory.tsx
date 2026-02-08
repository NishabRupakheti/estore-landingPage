import AboutCompanyData from "~/data/about/AboutCompany";

const OurStory = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Text content */}
                <div className="space-y-6">
                    <h1 className="text-5xl font-bold">Our Story</h1>
                    {AboutCompanyData.map((item) => (
                        <p key={item.id} className="text-gray-600 text-lg">
                            {item.text}
                        </p>
                    ))}
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