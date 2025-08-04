function Card({ name, description, price }) {
  return (
    <>
      <div className="h-auto flex flex-col border-2 rounded-lg hover:shadow-2xl">
        <h1>{name}</h1>
        <div>{description}</div>
        <div>{price}</div>
      </div>
    </>
  );
}
export default Card;
