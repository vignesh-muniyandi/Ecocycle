import React from 'react';
import "./LikedProducts.css";
import { FaHeart } from "react-icons/fa";
import {addToCart, addFavourite, addCartFromFavourite ,calculateTotal ,DisLikeCartProduct} from './Cartslice';
import { useDispatch ,useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"; 

const LikedProducts = () => {
   const { LikeCartItems, totalAmount } = useSelector((state) => state.cart);
    const dispatch =useDispatch();
    const navigate = useNavigate();
     
    const addFav =(item)=>{
        dispatch(addFavourite(item))
    }

    
    const addcart=(item)=>{
        dispatch(addCartFromFavourite(item))
        navigate("/Cartpage");
    }

    const disLikeCart =(item) => {
      dispatch(DisLikeCartProduct(item))
    }

    
  return (
    <div>
      <div className="body">
        <div className="product-page">
          <h2>Favourite</h2>

          {LikeCartItems.length === 0 ? (
            <p style={{textAlign:"center"}}>Your cart is empty</p>
          ) : (
            <>
              {LikeCartItems.map((item) => (
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
                      <button onClick={() => disLikeCart(item.id)}>
                        <FaHeart /> Remove from Like
                      </button>
                    </div>

                    <div className="contact">
                      <h4>Need Help?</h4>
                      <p>📞 +91 98765 43210</p>
                      <p>📧 support@ecocycle.com</p>
                    </div>
                  </div>
                </div>
              ))}
              ;
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LikedProducts;
