import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useSelector((state) => state.counterx.imageURL);
  const mediaType = data.media_type ?? media_type;
  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className="w-full min-w-[230px] max-w-[450px] h-80 rounded overflow-hidden block relative hover:scale-105 transition-all"
    >
      {data?.poster_path ? (
        <img src={imageURL + data?.poster_path} alt="" />
      ) : (
        <div className="flex flex-col pb-14 justify-center bg-neutral-700 items-center w-full h-full">
          <p className="text-center font-bold text-lg">Image</p>
          <p className="text-center font-bold text-lg">Not Found</p>
        </div>
      )}
      <div className="absolute top-4">
        {trending && (
          <div
            className="bg-black/60 py-2 pl-2 pr-8 font-semibold "
            style={{ clipPath: "polygon(0% -33px, 0px 185%, 105% 50%)" }}
          >
            #{index} Trending
          </div>
        )}
      </div>
      <div className="absolute bottom-0 h-16 backdrop-blur-md w-full bg-black/70 p-2">
        <h2 className="line-clamp-1 text-lg font-semibold">
          {data?.title || data?.name}
        </h2>
        <div className="flex justify-between items-center">
          <p className="text-sm text-neutral-400">
            {moment(data.release_date, "YYYY-MM-DD", true).isValid()
              ? moment(data.release_date).format("MMMM Do YYYY")
              : "January 01th 2025"}
            {/* {moment(data.release_date || "01-01-2025").format("MMMM Do YYYY")} */}
          </p>
          <p className="text-xs text-white bg-black px-3 rounded-full flex items-center">
            Rate: {data.vote_average?.toFixed(1) || "0,0"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
