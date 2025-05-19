import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const changeQuantity = (id, operation) => {
    const updatedCart = cartItems.map((item) => {
        if (item.id === id) {
          item.quantity =
            operation === "increase" ? item.quantity + 1 : item.quantity - 1;
        }
        return item;
      }).filter((item) => item.quantity > 0);
      updateCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const handleCheckout = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-10/12 mx-auto bg-white p-6 rounded-lg shadow-lg w-5/5 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="mb-2">Your cart is currently empty.</p>
            <Link
              to="/"
              className="text-blue-600 hover:underline font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain rounded-md bg-gray-50 p-2"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Rs.{item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => changeQuantity(item.id, "decrease")}
                      disabled={item.quantity <= 1}
                      className="px-2 py-1 text-xl rounded bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => changeQuantity(item.id, "increase")}
                      className="px-2 py-1 text-xl rounded bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total and Checkout */}
            <div className="mt-8 flex justify-between items-center border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Total: Rs.{calculateTotal()}
              </h3>
              <button
                onClick={handleCheckout}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
