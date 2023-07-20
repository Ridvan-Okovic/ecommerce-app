const Product = (props) => {
  return (
    <div className="w-96">
      <img
        src={props.image}
        className="w-full h-56 object-cover rounded shadow-md"
        alt="img"
      />
      <div className="text-lg flex justify-between capitalize mt-2 font-medium">
        <h3>{props.name}</h3>
        <h3 className="text-[#b49b8b]">$ {props.price}</h3>
      </div>
    </div>
  );
};

export default Product;
