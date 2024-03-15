const Test = () => {
  return (
    <div className="flex border border-gray-500 shadow justify-between p-2">
      <div>
        <h1 className="text-2xl font-bold">Test Name</h1>
        <p className="font-bold text-sm">Module: Name of the Module</p>
        <p className="font-bold text-sm">Date: 10/01/2021</p>
        <p className="font-bold text-sm">Marks: 100</p>
        <p className="font-bold text-sm">Duration: 30mins</p>
      </div>
      <div className="flex flex-col justify-center">
        <button className="bg-black text-white p-2 text-sm font-bold">
          {" "}
          Start Test{" "}
        </button>
      </div>
    </div>
  );
};

export default Test;
