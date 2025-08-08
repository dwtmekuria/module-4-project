import "./App.css";
import Card from "./Components/Card";

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
  return (
    <div className="flex flex-col">
      <h1 className="text-7xl text-center p-4">Products</h1>
      <div className="flex p-3 gap-3 justify-center">
        {products.map((product) => (
          <Card className="" key={product.ID} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
