const Service = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16" >
        <div className="flex justify-center gap-20">
            <div className="flex flex-col items-center text-center max-w-xs">
               <div className="bg-gray-300 rounded-full p-3 mb-6">
                 <div className="bg-black rounded-full p-4">
                   <img src="/app/images/truck.png" alt="truck" className="w-10 h-10" />
                 </div>
               </div>
                <h2 className="text-lg font-bold mb-2 uppercase">Free and fast Delivery</h2>
                <p className="text-sm">Free delivery for all orders over $140</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-xs">
               <div className="bg-gray-300 rounded-full p-3 mb-6">
                 <div className="bg-black rounded-full p-4">
                   <img src="/app/images/miniheadphone.png" alt="mini headphone" className="w-10 h-10" />
                 </div>
               </div>
                <h2 className="text-lg font-bold mb-2 uppercase">24/7 Customer Service</h2>
                <p className="text-sm">Friendly 24/7 customer support</p>
            </div>
            
            <div className="flex flex-col items-center text-center max-w-xs">
               <div className="bg-gray-300 rounded-full p-3 mb-6">
                 <div className="bg-black rounded-full p-4">
                   <img src="/app/images/firewall.png" alt="firewall" className="w-10 h-10" />
                 </div>
               </div>
                <h2 className="text-lg font-bold mb-2 uppercase">Money back guarantee</h2>
                <p className="text-sm">We return money within 30 days</p>
            </div>
        </div>
    </div>
  )
}

export default Service