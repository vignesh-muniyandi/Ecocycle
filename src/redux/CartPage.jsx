import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart, calculateTotal } from "./Cartslice";

const CartPage = () => {
  const { cycleCartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cycleCartItems, dispatch]);
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h2> your Cart</h2>
        {cycleCartItems.length === 0 ? (
          <p>Your cart is Empty</p>
        ) : (
          <>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "20px",
              }}
            >
              <thead>
                <tr>
                  <th style={{ borderBottom: "2px solid #ccc" }}>Image</th>
                  <th style={{ borderBottom: "2px solid #ccc" }}>Product</th>
                  <th style={{ borderBottom: "2px solid #ccc" }}>price</th>
                  <th style={{ borderBottom: "2px solid #ccc" }}>Quantity</th>
                  <th style={{ borderBottom: "2px solid #ccc" }}>Total</th>
                  <th style={{ borderBottom: "2px solid #ccc" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {cycleCartItems.map(
                  (item) => (
                    console.log(item),
                    (
                      <tr key={item.id}>
                        <td>
                          <img
                            src={item.img}
                            alt={item.title}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({ id: item.id, change: -1 }),
                              )
                            }
                          >
                            -
                          </button>
                          <span style={{ margin: "0 10px " }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({ id: item.id, change: 1 }),
                              )
                            }
                          >
                            +
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    )
                  ),
                )}
              </tbody>
            </table>
            <h3> Total Amount :{totalAmount}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
