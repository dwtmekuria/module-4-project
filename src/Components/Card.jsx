function Card({ id, title, description, price, addToCart }) {
  return (
    <>
      <div className="flex-wrap flex flex-col hover:scale-123 border-2 rounded-lg hover:shadow-2xl p-3 ease-in-out transition-all duration-300 delay-300 bg-purple-300">
        <h1 className="text-2xl text-center pb-2">{title}</h1>
        <div className="text-center pb-2">{description}</div>
        <div className="text-center pb-2">{price}$</div>
        <button
          className="p-1 pr-3 pl-3 items-center self-center bg-blue-400 w-fit rounded-xl m-2 hover:shadow-2xl cursor-pointer ease-in-out transition-colors duration-900 delay-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600"
          onClick={addToCart}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}
export default Card;
