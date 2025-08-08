import "./App.css";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import { useSelector, useDispatch } from "react-redux";

var dispatch = useDispatch();
function App() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "something something something",
      price: 250,
    },
    {
      id: 2,
      title: "Product 2",
      description: "something something something",
      price: 250,
    },
    {
      id: 3,
      title: "Product 3",
      description: "something something something",
      price: 250,
    },
    {
      id: 4,
      title: "Product 4",
      description: "something something something",
      price: 250,
    },
  ];

  function handleAddToCart(product) {
    var newCart = {
      id: product.id,
      title: product.title,
      price: product.price,
    };

    dispatch(addToCart(newCart));
  }

  var cartList = useSelector((state) => state.cartState);
  //console.log(cartList);
  return (
    <div className="flex flex-col">
      <h1 className="text-7xl text-center p-4">Products</h1>
      <div className="flex p-3 gap-3 justify-center">
        {products.map((product) => (
          <Card
            className=""
            key={product.id}
            {...product}
            addToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      {cartList.map((cart) => (
        <Cart key={cart.id} {...cart} />
      ))}
    </div>
  );
}

export default App;
