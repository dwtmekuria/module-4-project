import "./App.css";
import React, { useState } from "react";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import AddProductModal from "./Components/AddProductModal";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "./store/cart/cartSlice.js";
import { add } from "./store/cart/priceSlice.js";
import { remove } from "./store/cart/priceSlice.js";
import { removeCart } from "./store/cart/cartSlice.js";
import { addProduct } from "./store/cart/productSlice.js";


function App() {
  var dispatch = useDispatch();
  
  var cartList = useSelector((state) => state.cartState);
  var totalPrice = useSelector((state) => state.priceState);
  var products = useSelector((state) => state.productState);
  
  let thStyle = "p-2 border border-gray-300 text-left"; 
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddToCart(product) {
    var newCart = {
      id: product.id,
      title: product.title,
      price: product.price,
    };

    dispatch(addCart(newCart));
    dispatch(add(product.price));
  }
  function handleRemoveFromCart(product) {
    dispatch(removeCart(product));
    dispatch(remove(product.price));
  }

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };
  function handleAddProduct(product) {
    dispatch(addProduct(product));
    handleModalOpen();
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-center p-4">Products</h1>
      <button
        className="p-1 pr-3 pl-3 items-center self-center bg-blue-400 w-fit rounded-xl m-2 hover:shadow-2xl cursor-pointer ease-in-out transition-colors duration-900 delay-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600"
        onClick={handleModalOpen}
      >
        AddProduct</button>
      <div className="grid grid-cols-4 p-3 gap-3 justify-center ">
        {products.map((product) => (
          <Card
            className=""
            key={product.id}
            {...product}
            addToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      <table className="m-6 w-full">
        <caption className="text-4xl table-caption">Cart</caption>
        <thead>
          <tr>
            <th className={thStyle}>#</th>
            <th className={thStyle}>Title</th>
            <th className={thStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((cart) => (
            <Cart key={cart.id} {...cart} thStyle={thStyle}/>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>Total Price: {totalPrice}</td>
          </tr>
        </tfoot>
      </table>
          <AddProductModal 
          isOpen={isModalOpen}
          onClose={handleModalOpen}
          addProduct={handleAddProduct}
          />
    </div>
  );
}

export default App;
