import CheckOutHeader from "./CheckOutHeader";
import CheckOutItem from "./CheckOutItem";

const CheckOut = () => {
  return (
    <div className="container mx-auto border border-gray-500 px-2 py-1">
      {/*header  */}
      <CheckOutHeader />
      <div className="mt-2 flex flex-col gap-5">
        <CheckOutItem />
        <CheckOutItem />
        <CheckOutItem />
      </div>
    </div>
  );
};

export default CheckOut;
