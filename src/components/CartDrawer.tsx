import { useCart } from "../context/CartContext";
import { useCartDrawer } from "../context/cartDrawerContext";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const CartDrawer = () => {
  const { isDrawerOpen, closeDrawer } = useCartDrawer();
  const { cartItems, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween" }}
          className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-xl z-50 p-6 flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button onClick={closeDrawer}>
              <FaTimes size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto divide-y">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 mt-8 text-center">Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="py-4 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">{item.title}</h4>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.title, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.title, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Total */}
          {cartItems.length > 0 && (
            <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
