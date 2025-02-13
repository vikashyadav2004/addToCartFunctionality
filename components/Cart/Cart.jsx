"use client"
import { Decrease, Delete, Increase } from '@/reducer/cartSlice';
import React from 'react'
import { ImBin } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux'; 

const Cart = () => {
    const Cart = useSelector((state) => state.cart.value);    
    // const Cart =  JSON.parse(localStorage.getItem("cartProduct")) || []   
    const dispatch = useDispatch() 
  return (
    Cart?.map((item, index) => {
        return (
          <div className="cart-container" key={index}>
            <div className="cart-item">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="cart-item-thumbnail"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price"> ${item.price}</p>
                <div className="cart-item-quantity">
                  {item.itemQuantity === 1 ? (
                    <button
                      className="bg-red-600 px-4 rounded text-white mx-2 mb-1 py-3"
                      onClick={() => {
                        dispatch(Delete(item));
                      }}
                    >
                      <ImBin />
                    </button>
                  ) : (
                    <button
                      className="quantity-btn"
                      onClick={() => {
                        dispatch(Decrease(item));
                      }}
                    >
                      -
                    </button>
                  )}
                  <span>{item.itemQuantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      dispatch(Increase(item));
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <div>total:{item.price * item.itemQuantity}</div>
                <button
                  className="remove-from-cart-btn"
                  onClick={() => {
                    dispatch(Delete(item));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })
  )
}

export default Cart