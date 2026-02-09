import { useSelector, useDispatch } from "react-redux"
import { removeFromWishlist, clearWishlist } from "~/slice/wishlist_slice";
import { addItemToCart } from "~/slice/product_cart_slice";
import { FaRegTrashAlt, FaShoppingCart } from "react-icons/fa";
// Import the RootState type for better type checking 
import type { RootState } from "../../store";


const Wishlist = () => {

  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.wishlist); // get the wishlist items from the store


  const MoveToBag = () => {
    // adding all the items to cart
    items.forEach((item) => {
      dispatch(addItemToCart({
        ...item,
        quantity: 1,
      }));
    });

    // clearing the wishlist
    dispatch(clearWishlist());

  }


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-normal">Wishlist ({items.length})</h1>
        <button
          className="px-8 py-3 border cursor-pointer border-gray-800 text-gray-900 font-medium rounded hover:bg-gray-50 transition-colors"
          onClick={MoveToBag}
        >
          Move All To Bag
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.id} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg p-1">
            <div className="relative bg-gray-100 rounded mb-4 p-8 flex items-center justify-center h-64 overflow-hidden">
              {/* Discount Badge */}
              {item.discount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded">
                  -{item.discount}%
                </span>
              )}

              {/* Delete Icon */}
              <div className="absolute top-3 right-3">
                <button
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                >
                  <FaRegTrashAlt className="text-sm" />
                </button>
              </div>

              <img src={item.img} alt={item.name} className="max-h-40 object-contain" />

              {/* Add To Cart Button - Shows at bottom */}
              <button
                className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 transition-opacity cursor-pointer"
                onClick={() => {
                  dispatch(addItemToCart({
                    ...item,
                    quantity: 1,
                  }));
                  dispatch(removeFromWishlist(item.id));
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <FaShoppingCart className="text-sm" />
                  <span>Add To Cart</span>
                </div>
              </button>
            </div>

            {/* Product Info */}
            <h4 className="font-semibold mb-2">{item.name}</h4>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-red-500 font-semibold">${item.price}</span>
              {item.originalPrice && (
                <span className="line-through text-gray-400">${item.originalPrice}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist