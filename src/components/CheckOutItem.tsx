import { useState } from "react";

const CheckOutItem = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="border border-gray-500 flex justify-between px-2">
        <div className="flex flex-col">
          <p className="font-bold text-2xl">Question Title</p>
          <p>
            <span className="font-bold text-sm">Module:</span> Name of the
            Module
          </p>
          <p>
            <span className="font-bold text-sm">Date:</span> 10/04/2021
          </p>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <select className="bg-black px-2 py-1 text-white flex items-center justify-center text-sm">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-black px-2 py-1 text-white flex items-center justify-center text-sm"
          >
            Delete
          </button>
        </div>
      </div>
      {isOpen && <DeleteModal setIsOpen={setIsOpen} />}
    </>
  );
};

export default CheckOutItem;

type Props = {
  setIsOpen: (value: boolean) => void;
};

function DeleteModal({ setIsOpen }: Props) {
  return (
    <div className="fixed top-50 left-1/2 transform -translate-x-1/2 container mx-auto w-[70%] p-5 bg-white border border-slate-500 md:w-[500px]">
      <div className="font-bold text-sm uppercase">delete from the cart </div>
      <div className="flex gap-2 p-5">
        <button className="bg-black text-white flex items-center justify-center p-2 text-sm font-bold">
          Yes
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-black text-white flex items-center justify-center p-2 text-sm font-bold"
        >
          No
        </button>
      </div>
    </div>
  );
}
