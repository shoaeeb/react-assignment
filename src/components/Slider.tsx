import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Slider = () => {
  const images = [
    {
      url: "https://media.istockphoto.com/id/949118068/photo/books.webp?s=2048x2048&w=is&k=20&c=84QzSRpNc21wzXu5K7t7z0lSUQ93qIFZOmS84JKdvnI=",
    },
    {
      url: "https://media.istockphoto.com/id/457207765/photo/man-sitting-on-sofa-reading-book.jpg?s=2048x2048&w=is&k=20&c=2NotTGuRUshm2BVbyPCduuHaxxyNxkTjdBrVKD9NX90=",
    },
    {
      url: "https://media.istockphoto.com/id/1416002606/photo/multiethnic-college-student-friends-studying-together-at-campus.webp?s=2048x2048&w=is&k=20&c=WBO3ECgJfzb4PthZ-gU-IWVg2i_Wtypu4cqXe284kW8=",
    },
    {
      url: "https://media.istockphoto.com/id/1362063465/photo/female-teen-student-with-a-backpack-and-books-smiling-stock-photo.webp?s=2048x2048&w=is&k=20&c=drE049CAIwj74hoX5w-36FXFIzjTJMQy6KEjYxf34rA=",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer ">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* right arrow */}
        <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer ">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
