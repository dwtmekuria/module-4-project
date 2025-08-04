import "./App.css";
import Card from "./assets/Components/Card";

function App() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "something something something",
      price: 250,
    },
    {
      id: 2,
      name: "Product 2",
      description: "something something something",
      price: 250,
    },
    {
      id: 3,
      name: "Product 3",
      description: "something something something",
      price: 250,
    },
    {
      id: 4,
      name: "Product 4",
      description: "something something something",
      price: 250,
    },
  ];
  return (
    <div className="h-screen">
      {products.map((product) => (
        <Card className="flex" key={product.ID} {...product} />
      ))}
    </div>
  );
}

export default App;
