function Cart({ id, title, price }) {
  let thStyle = "p-2 border border-gray-300 text-left";

  return (
    <div className="">
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
          <tr>
            <td className={thStyle}>{id}</td>
            <td className={thStyle}>{title}</td>
            <td className={thStyle}>{price}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>Total Price: </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default Cart;
