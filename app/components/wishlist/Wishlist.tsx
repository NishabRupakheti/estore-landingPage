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
          className="px-8 py-3 border border-gray-800 text-gray-900 font-medium rounded hover:bg-gray-50 transition-colors"
          onClick={MoveToBag}
        >
          Move All To Bag
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="relative group">
            {/* Product Card */}
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
              {/* Discount Badge */}
              {item.discount && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded">
                  -{item.discount}%
                </div>
              )}

              {/* Delete Icon */}
              <button
                className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                onClick={() => dispatch(removeFromWishlist(item.id))}
              >
                <FaRegTrashAlt className="text-sm" />
              </button>

              {/* Product Image */}
              <div className="aspect-square flex items-center justify-center p-8">
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Add To Cart Button */}
            <button
              className="w-full bg-black text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mb-3"
              onClick={() => {
                dispatch(addItemToCart({
                  ...item,
                  quantity: 1,
                }));
                dispatch(removeFromWishlist(item.id));
              }}
            >
              <FaShoppingCart className="text-sm" />
              Add To Cart
            </button>

            {/* Product Info */}
            <div>
              <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
              <div className="flex items-center gap-3">
                {item.discount ? (
                  <>
                    <span className="text-red-500 font-medium">${item.price}</span>
                    <span className="text-gray-400 line-through">${item.originalPrice}</span>
                  </>
                ) : (
                  <span className="text-red-500 font-medium">${item.price}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist