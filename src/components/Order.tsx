const Order = () => {
  return (
    <div className="border border-gray-500 justify-between  flex shadow px-1">
      <div className="flex flex-col p-2 w-[50%]">
        <h1 className="font-bold text-2xl">ORDER 1293</h1>
        <p className="text-sm font-bold">Product: Sample Book Name</p>
        <p className="text-sm font-bold">Date: 10/04/2021</p>
        <p className="text-sm font-bold">
          Address: Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center ">
        <button className="bg-black text-white px-2">View Details</button>
        <button className="bg-black text-white px-2">Track Order</button>
        <button className="bg-black text-white px-2">Download INVOICE</button>
      </div>
    </div>
  );
};

export default Order;
