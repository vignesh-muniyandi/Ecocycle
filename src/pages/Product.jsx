import React from "react";
import "../pages/Product.css";
import productStore from "../constant/productStore";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import {
  addToCart,
  addFavourite,
  DisLikeCartProduct,
} from "../redux/Cartslice";

function Product() {
  const cartProducts = useSelector((state) => state.cart.cycleCartItems);
  const likedProducts = useSelector((state) => state.cart.LikeCartItems);
  const dispatch = useDispatch();

  const addcart = (item) => {
    dispatch(addToCart(item));
  };

  const addLikeCart= (item) => {
    dispatch(addFavourite(item));
  };

  const disLikeCart = (id) => {
    dispatch(DisLikeCartProduct(id));
  };

  return (
    <div className="product">
      <h1 className="head">Our Products</h1>

      {productStore.map((item) => {
        const isLiked = likedProducts?.some((i) => i.id === item.id);

        return (
          <div className="container" key={item.id}>
            <div className="product-img">
              <img src={item.img} alt="#" />
            </div>

            <div className="product-contect">
              <h1>{item.title}</h1>
              <p className="price">{item.price}</p>

              <p>{item.des}</p>

              <h3>Key Features:</h3>
              <ul>
                <li>{item.spefic1}</li>
                <li>{item.spefic2}</li>
                <li>{item.spefic3}</li>
                <li>{item.spefic4}</li>
              </ul>

              <div className="buttonGroup">
                <button
                  onClick={() => {
                    addcart(item);
                  }}
                  className="cartBtn"
                >
                  Add to Cart
                </button>
                {isLiked ? (
                  <button onClick={() => disLikeCart(item.id)}>
                    <FaHeart /> Remove from Like
                  </button>
                ) : (
                  <button onClick={() => addLikeCart(item)}>
                    <FaRegHeart /> Add to Like
                  </button>
                )}
              </div>

              <div className="contact">
                <h4>Need Help?</h4>
                <p>📞 +91 98765 43210</p>
                <p>📧 support@ecocycle.com</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
