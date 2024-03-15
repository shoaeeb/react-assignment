import Test from "./Test";
import { CiSearch } from "react-icons/ci";
const Tests = () => {
  return (
    <div className="border p-2 flex flex-col gap-2">
      <div className="relative">
        <form>
          <input
            type="text"
            className="text-right w-full p-2 text-sm font-bold border border-gray-300 mb-2"
          />
          <CiSearch className="absolute left-1 top-3" />
        </form>
      </div>
      <Test />
      <Test />
    </div>
  );
};

export default Tests;
