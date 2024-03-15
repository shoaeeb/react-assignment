const AboutUs = () => {
  return (
    <div className="container flex flex-col gap-4  mx-auto p-5">
      {[0, 1, 2].map((_, index) => (
        <div
          key={index}
          className={` flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } w-full  justify-between gap-4`}
        >
          <div className="bg-gray-500 w-[50%] h-[full]"></div>
          <div className="w-[50%]">
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              officiis a commodi, mollitia odio eveniet! Laboriosam ex optio
              voluptatum, sint provident maxime tenetur? Dolor, eos nam pariatur
              eligendi molestias necessitatibus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusantium id ad veniam aspernatur
              assumenda error totam ea alias repudiandae saepe. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Soluta eveniet
              facilis quisquam eligendi officiis doloribus harum eaque pariatur
              dicta possimus!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
