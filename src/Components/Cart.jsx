function Cart({ id, title, price ,quantity,thStyle,handleRemove, increase,decrease}) {
  

  return (
    <tr className="border-b border-gray-200">
      <td className={thStyle}>{id}</td>
        <td className={thStyle}>{title}</td>
        <td className={thStyle}>{price}</td>
        <td className={thStyle+ " flex items-center justify-around"}>
          <button 
          className="transtion-color duration-300 ease-in-out hover:text-red-500 hover:border-2 p-1 px-4"
          onClick={decrease}>-</button>
          <span className="mx-2">{quantity}</span>
          <button
          className="transtion-color duration-300 ease-in-out hover:text-red-500 hover:border-2 p-1 px-4"
          onClick={increase}>+</button>
        </td>
        <td className={thStyle}>
          <button 
          className="text-red-500 hover:text-red-700"
          onClick={handleRemove}
          >
            Remove
          </button>
        </td>
    </tr>
  );
}
export default Cart;

