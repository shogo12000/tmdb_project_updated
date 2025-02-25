import { useRef } from "react";
import Card from "./Card";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const HorizontalScrollCard = ({ data, heading, trending, media_type }) => {
  const containerRef = useRef();

  const handleNext = ()=>{
    console.log(containerRef);
    containerRef.current.scrollLeft += 250;
  }

  const handleBack = ()=>{
    containerRef.current.scrollLeft -= 250;
  }

  return (
    <div className=" container w-full mx-auto my-10 px-4 md:px-0">
      <h2 className="text-xl lg:text-2xl font-bold mb-2 text-whit">
        {heading}
      </h2>
      <div className=" relative">
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] grid-flow-col  overflow-x-scroll overflow-hidden gap-5 group relative  scroll-smooth transition-normal scrolbar-none "
        >
          {data.map((data, index) => {
            return (
              <Card key={index} data={data} trending={trending} index={index + 1} media_type={media_type}/>
            );
          })}
        </div>
        <div className="absolute top-1/2 flex justify-between w-full  items-center -translate-y-1/2">
          <button onClick={handleBack} className="bg-white p-1 text-black rounded-full hidden sm:block">
            <IoMdArrowBack />
          </button>
          <button  onClick={handleNext} className="bg-white p-1 text-black rounded-full hidden sm:block">
            <IoMdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
