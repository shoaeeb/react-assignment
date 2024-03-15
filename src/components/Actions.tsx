import { useState } from "react";
import Orders from "./Orders";
import Tests from "./Tests";
import Questions from "./Questions";

type ActionType = {
  type: "ORDERS" | "TEST" | "Q/A";
};
const Actions = () => {
  const [action, setAction] = useState<ActionType>({ type: "ORDERS" });
  return (
    <>
      <div className="border flex gap-2 p-2">
        <button
          onClick={() => setAction({ type: "ORDERS" })}
          className={`${
            action.type === "ORDERS" ? "bg-black" : "bg-gray-500"
          } text-white font-bold p-2`}
        >
          Orders
        </button>
        <button
          onClick={() =>
            setAction({
              type: "TEST",
            })
          }
          className={`${
            action.type === "TEST" ? "bg-black" : "bg-gray-500"
          }  text-white font-bold p-2`}
        >
          Test
        </button>
        <button
          onClick={() =>
            setAction({
              type: "Q/A",
            })
          }
          className={`${
            action.type === "Q/A" ? "bg-black" : "bg-gray-500"
          }  text-white font-bold p-2`}
        >
          Q/A
        </button>
      </div>
      {action.type === "ORDERS" && <Orders />}
      {action.type === "TEST" && <Tests />}
      {action.type === "Q/A" && <Questions />}
    </>
  );
};
export default Actions;
