const Question = () => {
  return (
    <div className="flex justify-between px-2 border border-gray-500 shadow p-2">
      <div className=" flex flex-col w-[50%]">
        <h2 className="font-bold text-3xl">Question Title</h2>
        <p className="font-bold text-sm">Module: Name of the Module</p>
        <p className="font-bold text-sm">Date: 10/04/2021</p>
      </div>
      <div className="flex flex-col justify-center">
        <button className="bg-black text-white p-2 text-sm font-bold">
          {" "}
          View Reply
        </button>
      </div>
    </div>
  );
};

export default Question;
