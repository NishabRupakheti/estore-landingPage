const BillingForm = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <h2 className="text-3xl font-semibold mb-8 text-black">Billing Details</h2>
      
      <form className="space-y-6">
        {/* First Name */}
        <div>
          <label className="block text-gray-400 text-sm mb-2">
            First Name<span className="text-red-400">*</span>
          </label>
          <input 
            type="text" 
            className="w-full bg-gray-100 border-none rounded-sm py-3 px-4 focus:ring-2 focus:ring-gray-200 outline-none"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-gray-400 text-sm mb-2">Company Name</label>
          <input 
            type="text" 
            className="w-full bg-gray-100 border-none rounded-sm py-3 px-4 outline-none"
          />
        </div>

        {/* Street Address */}
        <div>
          <label className="block text-gray-400 text-sm mb-2">
            Street Address<span className="text-red-400">*</span>
          </label>
          <input 
            type="text" 
            className="w-full bg-gray-100 border-none rounded-sm py-3 px-4 outline-none"
          />
        </div>

        {/* Apartment */}
        <div>
          <label className="block text-gray-400 text-sm mb-2">Apartment, floor, etc. (optional)</label>
          <input 
            type="text" 
            className="w-full bg-gray-100 border-none rounded-sm py-3 px-4 outline-none"
          />
        </div>

        {/* Town/City */}
        <div>
          <label className="block text-gray-400 text-sm mb-2">
            Town/City<span className="text-red-400">*</span>
          </label>
          <input 
            type="text" 
            className="w-full bg-gray-100 border-none rounded-sm py-3 px-4 outline-none"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-400 text-sm mb-2">
            Phone Number<span className="text-red-400">*</span>
          </label>
          <input 
            type="tel" 
            className="w-full bg-gray-100 border-none rounded-sm py-3 px-4 outline-none"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-gray-400 text-sm mb-2">
            Email Address<span className="text-red-400">*</span>
          </label>
          <input 
            type="email" 
            className="w-full bg-gray-100 border-none rounded-sm py-3 px-4 outline-none"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-3 pt-2">
          <input 
            type="checkbox" 
            id="save-info"
            className="w-5 h-5 accent-red-500 rounded cursor-pointer"
          />
          <label htmlFor="save-info" className="text-sm text-black cursor-pointer">
            Save this information for faster check-out next time
          </label>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;