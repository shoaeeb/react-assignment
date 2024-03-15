import { useAppContext } from "../contexts/AppContext";

const UserHeader = () => {
  const { user, logout } = useAppContext();
  return (
    <div className="flex border ">
      <div className="flex flex-col gap-6 border px-5 py-1 w-[50%]">
        <h2 className="text-sm font-bold">{user?.username}</h2>
        <p className="text-sm font-bold">9454452623</p>
        <p className="text-sm font-bold">{user?.username}@gmail.com</p>
        <div className="flex gap-2 ">
          <button className="bg-black text-white p-2 text-sm font-bold">
            Edit
          </button>
          <button
            onClick={logout}
            className="bg-black text-white p-2 text-sm font-bold"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-5  py-1  w-[50%]">
        <h2 className="text-sm font-bold">Address</h2>
        <p className="text-sm font-bold">R107, AJMERA INFINITY</p>
        <p className="text-sm font-bold">KARUNA NAGAR, ELECTRONIC CITY,</p>
        <p className="text-sm font-bold">BANGALORE,INDIA</p>
      </div>{" "}
    </div>
  );
};
export default UserHeader;
