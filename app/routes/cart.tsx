import { clearCart } from "~/slice/product_cart_slice";
import type { Route } from "./+types/home";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Cart" },
    { name: "description", content: "This is a cart page" },
  ];
}

const cart = () => {

  const { items } = useSelector((state) => state.productCart);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    items.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: string, value: number) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, value) }));
  };

  const subtotal = items.reduce((total: number, item: any) => 
    total + item.price * (quantities[item.id] || 1), 0
  );

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Cart Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 p-4 bg-white border-b border-gray-200">
          <div className="font-medium text-gray-900">Product</div>
          <div className="font-medium text-gray-900 text-center">Price</div>
          <div className="font-medium text-gray-900 text-center">Quantity</div>
          <div className="font-medium text-gray-900 text-right">Subtotal</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {items.map((item: any) => (
            <div key={item.id} className="grid grid-cols-4 gap-4 p-4 items-center">
              {/* Product */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <button 
                    className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600"
                    onClick={() => {/* Add remove functionality */}}
                  >
                    ×
                  </button>
                </div>
                <span className="text-gray-900">{item.name}</span>
              </div>

              {/* Price */}
              <div className="text-center text-gray-900">${item.price}</div>

              {/* Quantity */}
              <div className="flex justify-center">
                <input
                  type="number"
                  min="1"
                  className="w-20 border border-gray-300 rounded px-3 py-1 text-center focus:outline-none focus:ring-2 focus:ring-red-400"
                  value={quantities[item.id] || 1}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                />
              </div>

              {/* Subtotal */}
              <div className="text-right text-gray-900 font-medium">
                ${item.price * (quantities[item.id] || 1)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions Row */}
      <div className="flex justify-between items-center">
        <NavLink 
          to="/" 
          className="px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded hover:bg-gray-50 transition-colors"
        >
          Return To Shop
        </NavLink>
        <button 
          className="px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded hover:bg-gray-50 transition-colors"
        >
          Update Cart
        </button>
      </div>

      {/* Bottom Section: Coupon and Cart Total */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Coupon Section */}
        <div className="flex gap-3 items-start">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button className="px-8 py-3 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition-colors">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="border border-gray-300 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Cart Total</h3>
          
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-gray-600">Subtotal:</span>
            <span className="text-gray-900">${subtotal}</span>
          </div>
          
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-gray-600">Shipping:</span>
            <span className="text-gray-900">Free</span>
          </div>
          
          <div className="flex justify-between py-3">
            <span className="text-gray-600">Total:</span>
            <span className="text-gray-900 font-semibold">${subtotal}</span>
          </div>

          <button className="w-full py-3 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition-colors mt-4">
            Process to checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default cart