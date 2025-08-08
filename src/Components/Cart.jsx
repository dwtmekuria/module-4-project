function Cart({ id, title, price ,quantity,thStyle}) {
  

  return (
    <tr className="border-b border-gray-200">
      <td className={thStyle}>{id}</td>
        <td className={thStyle}>{title}</td>
        <td className={thStyle}>{price}</td>
        <td className={thStyle}>{quantity}</td>
    </tr>
  );
}
export default Cart;

