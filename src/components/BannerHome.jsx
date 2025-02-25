import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const BannerHome = () => {
  const movies = useSelector((state) => state.counterx.bannerData);
  const url = useSelector((state) => state.counterx.imageURL);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => { 
    if (currentImage < movies.length - 1) setCurrentImage(currentImage + 1);
  };

  const handlePrevious = () => {
    if (currentImage > 0) setCurrentImage(currentImage - 1);
  };

  useEffect(() => {
    console.log("executado effect");
    const interval = setInterval(() => {
      if (currentImage < movies.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage, movies, currentImage]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden  ">
        <div className="flex justify-between w-full px-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10  ">
          <button
            onClick={handlePrevious}
            className="p-1 bg-neutral-600  text-white text-2xl hover:text-amber-500 rounded-full hidden md:block"
          >
            <IoMdArrowBack />
          </button>
          <button
            onClick={handleNext}
            className="p-1 bg-neutral-600  text-white text-2xl hover:text-amber-500 rounded-full hidden md:block"
          >
            <IoMdArrowForward />
          </button>
        </div>

        {movies.map((movie, index) => {
          return (
            <div
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transiition-all duration-1000"
              key={index}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className=" w-full h-full ">
                <img
                  src={`${url}${movie.poster_path}`}
                  alt=""
                  className=" h-full w-full object-fill object-center"
                />
              </div> 
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from from-neutral-900 to-transparent"></div>
              <div className="container mx-auto">
                <div className="container mx-auto absolute bottom-0 max-w-md px-3">
                  <h2 className="font-bold text-2xl text-white drop-shadow-2xl line-clamp-1">
                    {movie.title ? movie.title : movie.original_name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {movie.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="a">
                      Rating: {Number(movie.vote_average).toFixed(1)}+
                    </p>
                    <span>|</span>
                    <p>View: {Number(movie.popularity).toFixed(0)}</p>
                  </div>
                  <button
                    className=" bg-white px-4 py-2 text-black font-bold rounded mt-3  
                  hover:bg-orange-500 shadow-md transition-colors duration-1000 hover:scale-105"
                  >
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
