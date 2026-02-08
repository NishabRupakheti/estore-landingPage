import {  useSelector } from "react-redux"
import type { RootState } from "~/store";
import { useState } from "react"


const CheckOut = () => {

    const { items } = useSelector((state: RootState) => state.productCart);
    const [paymentMethod, setPaymentMethod] = useState("cash");
    const [couponCode, setCouponCode] = useState("");

    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="max-w-md mx-auto p-6 bg-white">
            {/* Order Items */}
            <div className="space-y-4 mb-6">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src={item.img} alt={item.name} className="w-12 h-12 object-cover rounded" />
                            <span className="text-gray-900">{item.name}</span>
                        </div>
                        <span className="text-gray-900 font-medium">${item.price * item.quantity}</span>
                    </div>
                ))}
            </div>

            {/* Pricing Details */}
            <div className="space-y-4 pb-6 border-b border-gray-300">
                <div className="flex justify-between text-gray-900">
                    <span>Subtotal:</span>
                    <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-900">
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-900 font-medium">
                    <span>Total:</span>
                    <span>${subtotal}</span>
                </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-6 space-y-4">
                {/* Bank Payment */}
                <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                        <input
                            type="radio"
                            name="payment"
                            value="bank"
                            checked={paymentMethod === "bank"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-5 h-5"
                        />
                        <span className="text-gray-900">Bank</span>
                    </div>
                    <div className="flex gap-2">
                        <img src="/app/images/bKash.png" alt="bKash" className="h-6" />
                        <img src="/app/images/visa.png" alt="Visa" className="h-6" />
                        <img src="/app/images/mastercard.png" alt="Mastercard" className="h-6" />
                        <img src="/app/images/nagad.png" alt="Nagad" className="h-6" />
                    </div>
                </label>

                {/* Cash on Delivery */}
                <label className="flex items-center gap-3 cursor-pointer">
                    <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5"
                    />
                    <span className="text-gray-900">Cash on delivery</span>
                </label>
            </div>

            {/* Coupon Section */}
            <div className="mt-6 flex gap-3">
                <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <button className="px-8 py-3 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition-colors">
                    Apply Coupon
                </button>
            </div>

            {/* Place Order Button */}
            <button className="w-full mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition-colors cursor-pointer ">
                Place Order
            </button>
        </div>
    )
}

export default CheckOut