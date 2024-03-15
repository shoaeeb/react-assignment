import { Link } from "react-router-dom";

const Classes = () => {
  return (
    <div className="container flex  mx-auto border flex-col justify-center border-slate-500 md:justify-start">
      {[0, 1, 2, 3, 4].map((item) => (
        <>
          <div
            key={item}
            className="flex justify-between gap-5 mt-1 px-5 flex-col md:flex-row"
          >
            <div className=" w-full   ">
              <img
                className="w-full object-cover min-h-full"
                src="https://fpimages.withfloats.com/actual/6138e7f8808e1a0001dcaa15.jpg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-bold">Sample Video Title</p>
              <p className="text-sm text-black font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                earum optio id qui odio facilis corporis animi aliquam dolores,
                tempore ipsa dolor quisquam dolorum quaerat voluptas quibusdam,
                placeat aspernatur excepturi maxime sunt assumenda quae a?
                Labore ipsum rem, molestias qui veritatis nostrum suscipit et
                libero incidunt nam? Cum, possimus distinctio?
              </p>
              <span className="mt-1">
                <Link
                  to="/practice"
                  className="bg-black text-white p-2 text-sm"
                >
                  Practice
                </Link>
              </span>
            </div>
          </div>
          <hr className="my-5 px-5" />
        </>
      ))}
      <div className="flex justify-center gap-1 ">
        {[1, 2, 3, 4, 5].map((item) => (
          <button className="text-sm font-bold border-2 border-solid">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Classes;
