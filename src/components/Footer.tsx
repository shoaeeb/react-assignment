const Footer = () => {
  return (
    <footer className="bg-black text-white  flex justify-between">
      <div className="p-4">
        <p className="font-bold text-white">Karo Abhyas</p>
        <p className="font-bold">112, Electronic City</p>
        <p className="font-bold">Bangalore,India</p>
      </div>
      <div className="p-4 flex flex-col">
        <p className="text-2xl text-white">Lorem ipsum dolor sit amet.</p>
        <div className="flex justify-between">
          <div className="bg-white text-black px-2 py-1 flex items-center justify-center">
            Contact Us
          </div>
          <div className="bg-white text-black px-2 py-1 flex items-center justify-center">
            Contact Us
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
