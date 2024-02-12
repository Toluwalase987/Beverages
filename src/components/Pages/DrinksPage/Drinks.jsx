import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import drinksData from "../../data/drinksdata";
import "../../../css/Drinks.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseQuantity,
  deleteItem,
  getAddedStatus,
  getCart,
  getQuantity,
  increaseQuantity,
} from "../../redux/slice/cartSlice";
import { ToastContainer, toast } from "react-toastify";

export default function Drinks() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { brandName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const cart = useSelector(getCart);
  const drinks = drinksData.find((drink) => drink.brandName === brandName);
  const quantity = useSelector(getQuantity);
  const addedStatus = useSelector(getAddedStatus)
  console.log(cart, addedStatus);
  // console.log(drinks);


  if (!drinks) {
    return <div className="found">Drink not found</div>;
  }

  const {
    image,
    description,
    brand,
    currentPrice,
    formerPrice,
    discount,
    similarDrinks,
  } = drinks;

  function addToCart() {
    try {
      const newItem = {
        title: brandName,
        image,
        price: currentPrice * 1,
        currentPrice,
        quantity,
      };
      dispatch(addItem(newItem));
      toast.success("Product Successfully Added");
    } catch (error) {
      toast.error("Failed to add product");
    }
  }

  function navigateToSimilarDrink(name) {
    navigate(`/drinks/${name}`);
    console.log("Clicked");
  }

  useEffect(() => {
    // An array of image URLs
    const imageUrls = drinksData.map((drinks) => drinks.image);

    const loadImages = async () => {
      // Create an array of image loading promises
      const imagePromises = imageUrls.map((imageUrl) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.src = imageUrl;
        });
      });

      // Wait for all image loading promises to resolve
      await Promise.all(imagePromises);

      // All images are loaded, set isLoading to false
      setIsLoading(false);
    };

    // Call the loadImages function to load images
    loadImages();
  }, []);

  return (
    <div className="medium-container">
      <ToastContainer />
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="drinks">
          <div className="column1">
            <div className="column1-left">
              <div className="main-drink">
                <img src={image} alt="" />
              </div>
              <h5>You may also like</h5>
              <div className="small">
                {similarDrinks.map((image, index) => {
                  return (
                    <div className="smaller-drinks" key={index} onClick={() => navigateToSimilarDrink(name)}>
                      <img src={image} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="column1-right">
              <h2>{brandName}</h2>
              <p>{description}</p>
              <h4>Brand: {brand}</h4>
              <div className="price">
                <h3>&#8358; {currentPrice}</h3>
                <h5>&#8358; {formerPrice}</h5>
                <h6>
                  {currentPrice > formerPrice
                    ? Math.floor(
                        (+(currentPrice - formerPrice) / formerPrice) * 100
                      )
                    : Math.floor(
                        (-(formerPrice - currentPrice) / formerPrice) * 100
                      )}
                  %
                </h6>
                <span>
                  <p>
                    {formerPrice > currentPrice
                      ? `You save ₦${
                          formerPrice - currentPrice
                        } on this purchase`
                      : `Enjoy the refreshing ${brandName} for ₦${
                          currentPrice - formerPrice
                        } more`}
                  </p>
                </span>
              </div>
              <div className="below">
                {addedStatus ? (
                  <div>
                    {cart.map((cart, index) => {
                      const { quantity, title } = cart;

                      return (
                        <div className="below-quantity" key={index}>
                          <button
                            className="qty-btn"
                            onClick={() => {
                              if (quantity < 2) {
                                dispatch(deleteItem(title));
                                toast.success("Product Successfully removed");
                              } else {
                                dispatch(decreaseQuantity(title));
                              }
                            }}
                          >
                            <FaMinus />
                          </button>
                          <p>{quantity}</p>
                          <button
                            className="qty-btn"
                            onClick={() => {
                              dispatch(increaseQuantity(title));
                              toast.success("Product quantity updated");
                            }}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <button className="below-btn" onClick={addToCart}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
