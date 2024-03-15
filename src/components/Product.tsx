type Props = {
  product: { name: string; img: string; price: number };
};

const Product = ({ product }: Props) => {
  return (
    <div className="flex flex-col items-center  gap-5 p-5 md:flex-row md:justify-between">
      <div className="w-[35%] p-2">
        <img
          className="object-cover min-h-full"
          src={product.img}
          alt={product.name}
        />
      </div>
      <div className="w-[65%] flex flex-col gap-5">
        <p className="text-2xl text-center font-bold md:text-left">
          {product.name}
        </p>
        <p className="text-2xl text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque at vel
          labore dolorem illum unde quae libero quo in necessitatibus! Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, autem.
        </p>
        <p className="text-2xl text-gray-500">{product.price}</p>
        <div className="flex justify-center md:justify-start">
          <button className=" bg-black text-white p-2 text-sm">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
