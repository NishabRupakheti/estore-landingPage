const ContactForm = () => {
    return (
        <form className="w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <input 
                    className="bg-gray-100 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-400" 
                    type="text" 
                    placeholder="Your Name *"
                />
                <input 
                    className="bg-gray-100 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-400" 
                    type="email" 
                    placeholder="Your Email *"
                />
                <input 
                    className="bg-gray-100 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-400" 
                    type="tel" 
                    placeholder="Your Phone *"
                />
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
                <textarea 
                    className="bg-gray-100 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-400 h-40 resize-none" 
                    placeholder="Your Message"
                ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
                <button 
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-red-400" 
                    type="submit"
                >
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default ContactForm