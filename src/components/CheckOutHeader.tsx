import { useState } from "react";

const CheckOutHeader = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <div className="flex justify-between px-2">
        <p className="text-2xl font-bold">Total: 2000</p>
        <button
          onClick={() => setShowDetails(true)}
          className="bg-black px-2 py-1 text-white flex items-center justify-center text-sm"
        >
          CheckOut
        </button>
      </div>
      {showDetails && <CheckOutDetails setShowDetails={setShowDetails} />}
    </>
  );
};

type Props = {
  setShowDetails: (value: boolean) => void;
};

const CheckOutDetails = ({ setShowDetails }: Props) => {
  return (
    <div className="fixed top-50 left-1/2 transform -translate-x-1/2 container mx-auto p-5 bg-white w-[70%] border border-slate-500 md:w-[500px]">
      <div className="font-bold text-sm">Please Provide all the details</div>
      <textarea
        className="border border-gray-500 g resize-none w-full
        "
        cols={20}
        rows={5}
      ></textarea>
      <div className="flex gap-2">
        <button className="bg-black text-white p-2 text-sm font-bold">
          Save
        </button>
        <button
          onClick={() => setShowDetails(false)}
          className="bg-black text-white p-2 text-sm font-bold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CheckOutHeader;
