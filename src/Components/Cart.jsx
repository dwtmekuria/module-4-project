function Cart({ id, title, price ,thStyle}) {
  

  return (
    <tr className="border-b border-gray-200">
      <td className={thStyle}>{id}</td>
        <td className={thStyle}>{title}</td>
        <td className={thStyle}>{price}</td>
    </tr>
  );
}
export default Cart;

