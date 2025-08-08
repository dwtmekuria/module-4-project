function Cart({ id, title, price ,quantity,thStyle,handleRemove }) {
  

  return (
    <tr className="border-b border-gray-200">
      <td className={thStyle}>{id}</td>
        <td className={thStyle}>{title}</td>
        <td className={thStyle}>{price}</td>
        <td className={thStyle}>{quantity}</td>
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

