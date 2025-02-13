"use client"
import React, { useEffect } from 'react'
import { fetchData } from '@/reducer/ProductSlice'
import { useDispatch, useSelector } from 'react-redux';
import { FaCartShopping, FaTrashCan } from "react-icons/fa6"; 
import { addValue, deleteValue } from '@/reducer/cartSlice';
const Products = () => {
  const dispatch = useDispatch();
  // deta fatching from the products slice
  const { data, loading, error } = useSelector((state) => state.products); 
  const CartItem = useSelector((state)=>state.cart.value)
  useEffect(() => { 
    dispatch(fetchData());
    localStorage.setItem("cartProducts",JSON.stringify(CartItem))
  }, [dispatch]); 

  const isProductInCart = (productId) => {
    return CartItem.find((item) => item.id === productId);
  };
  console.log(CartItem);
  return (
    <div>
       <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-x-5 gap-y-20 mx-5">
        {data.products?.map((product, index) => (
          <div
            className="max-w-xs rounded overflow-hidden shadow-lg bg-white relative pb-20"
            key={index}
          >
            <img
              className="w-full h-56 object-cover"
              src={product.thumbnail}
              alt="Product Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base"></p>
            </div>

            <div className="px-6 py-4 flex items-center justify-between absolute bottom-0 left-0 right-0">
              <span className="text-xl font-semibold text-gray-800">
                ${product.price}
              </span>
              <div>
              <button
                  className={`${
                    isProductInCart(product.id)
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white px-4 py-2 rounded-full transition duration-200`}
                  onClick={() => {
                    if (isProductInCart(product.id)) {
                      {dispatch(deleteValue(product))}
                    } else {
                      {dispatch(addValue(product))}
                    }
                  }}
                >
                  {isProductInCart(product.id) ? (
                    <FaTrashCan />
                  ) : (
                    <FaCartShopping />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products;