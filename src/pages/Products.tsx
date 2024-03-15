import { CiSearch } from "react-icons/ci";
import Product from "../components/Product";

const Products = () => {
  const Products = [
    {
      price: 2000,
      name: "Biology",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11h95ij4gJJVpolMDHAjl8IBPwAss3bbZyQ&usqp=CAU",
    },
    {
      price: 2000,
      name: "Chemistry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCNf8O6Qb9Nes43AsDijMkUOkQTXV3hQEag&usqp=CAU",
    },
    {
      price: 2000,
      name: "Physics",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3uT3BvTkKV01q_OMvYPvcRDeZjOb8o1AKw&usqp=CAU",
    },
  ];
  return (
    <div className="container mx-auto flex flex-col gap-2">
      {/* search */}
      <div className="flex relative">
        <form className="w-[100%] md:w-full">
          <input
            type="search"
            className="w-full p-2 border border-gray-500 outline-none text-right"
            placeholder="Search for products"
          />
          <button>
            <CiSearch className="absolute top-3 left-2" />
          </button>
        </form>
      </div>
      {Products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
