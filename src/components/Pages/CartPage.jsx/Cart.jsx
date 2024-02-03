import React from "react";
import "../../../css/Cart.css";
import cart1 from "../../../img/cart.webp";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  deleteItem,
  getCart,
  getTotalCartPrice,
  increaseQuantity,
} from "../../redux/slice/cartSlice";

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const price = useSelector(getTotalCartPrice);
  console.log(cart);
  const dispatch = useDispatch();

  function drinks() {
    const drinksRoute = "/drinks";
    navigate(drinksRoute);
  }

  return (
    <>
      {cart.length === 0 ? (
        <div className="cart">
          <div className="cart-content">
            <div className="cart-image">
              <img src={cart1} alt="" />
            </div>
            <h5>Your cart is empty!</h5>
            <p>
              Browse our categories and discover beverages suited to your taste.
            </p>
            <button onClick={drinks}>Start Shopping</button>
          </div>
        </div>
      ) : (
        <div className="something2">
          <div className="fullcart">
            {cart.map((cart, index) => {
              const { title, price, image, qtyInCart, currentPrice } = cart;

              return (
                <div key={index}>
                  <div className="something">
                    <div className="fullcart-left">
                      <div className="fullcart-image">
                        <img src={image} alt="" />
                      </div>
                      <h4>{title}</h4>
                      <h5>₦{currentPrice.toLocaleString()}</h5>
                      <div className="fullcart-btn">
                        <button
                          onClick={() => dispatch(decreaseQuantity(title))}
                        >
                          <FaMinus />
                        </button>
                        <p>{qtyInCart}</p>
                        <button
                          onClick={() => dispatch(increaseQuantity(title))}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                    <div
                      className="fullcart-right"
                      onClick={() => dispatch(deleteItem(title))}
                    >
                      <p>
                        Remove <FaTrashAlt />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="summary">
            <h4>Cart summary</h4>
            <div className="subtotal">
              <p>Subtotal</p>
              <h5>₦{price.toLocaleString()}</h5>
            </div>
            <button>Checkout ₦{price.toLocaleString()}</button>
            {/* <button onClick={()=> dispatch(clearCart())}>Empty cart</button> */}
          </div>
        </div>
      )}
    </>
  );
}
