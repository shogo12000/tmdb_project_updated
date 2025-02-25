import { useParams } from "react-router-dom";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import moment from "moment";
import Divider from "../components/Divider";
import HorizontalScrollCard from "../components/HorizontalScrollCard";

const DetailsPage = () => {
  const params = useParams();
  const [objData, setObjData] = useState({});
  const [cast, setCast] = useState({});
  const [similar, setSimilar] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const imageURL = useSelector((state) => state.counterx.imageURL);
  const { data: findTvMovie } = useFetch(`/${params.explore}/${params.id}`);
  const { data: castData } = useFetch(
    `/${params?.explore}/${params?.id}/credits`
  );
  const { data: similarData } = useFetch(
    `/${params?.explore}/${params?.id}/similar`
  );

  const { data: recommendationData } = useFetch(
    `/${params?.explore}/${params?.id}/recommendations`
  );

  useEffect(() => {
    if (findTvMovie != null) {
      setObjData(findTvMovie);
      console.log(findTvMovie);
    }
  }, [findTvMovie]);

  useEffect(() => {
    if (castData != null) {
      setCast(castData);
      console.log(castData);
      console.log(
        castData.crew.filter((aux, index) => {
          return aux.job === "Producer";
        })
      );
    }
  }, [castData]);

  useEffect(() => {
    if (similarData != null) {
      setSimilar(similarData);
      console.log(similarData);
    }
  }, [similarData]);

  useEffect(() => {
    if (recommendationData != null) {
      setRecommendation(recommendationData);
      console.log(recommendationData);
    }
  }, [recommendationData]);

  if (Object.keys(objData).length === 0 || Object.keys(cast).length === 0) {
    return <div>Loading...</div>;
  }

  const hours = (Number(objData.runtime) / 60).toFixed(0);
  const minute = Number(objData.runtime % 60);
  const writer = castData.crew
    .filter((aux, index) => {
      return aux.job === "Writer";
    })
    .map((el) => el.name);

  return (
    <div>
      <div className="w-full h-[450px] relative hidden lg:block ">
        <div className="w-full h-full">
          <img
            src={imageURL + objData?.poster_path}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-950/100 to-transparent"></div>
      </div>
      <div className="container flex flex-col gap-5 mx-auto px-3 py-16 sm:flex-row lg:py-0 lg:gap-10">
        <div className="relative mx-auto  lg:-mt-28 lg:ml-0 w-fit min-w-60">
          <img
            src={imageURL + objData?.poster_path}
            className="h-80 w-60 object-cover rounded mx-auto "
            alt=""
          />
        </div>

        <div className="flex-1 justify-center">
          <h2 className="text-center sm:text-left lg:text-3xl font-bold text-white">
            {objData?.title || objData?.name}
          </h2>
          <p className="text-neutral-600">{objData?.tagline}</p>
          <Divider />
          <div className="flex items-center gap-3 text-sm">
            <p>Rating: {Number(objData.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>View: {Number(objData.vote_count)}</p>
            <span>|</span>
            <p>
              {objData.runtime
                ? `Duration: ${hours}h ${minute}m `
                : `total seasons: ${objData?.number_of_seasons}`}
            </p>
          </div>
          <Divider />
          <div className="text-sm">
            <h3 className="font-bold mb-1">Overview</h3>
            <p className="">{objData.overview}</p>

            <div className="flex items-center gap-3 my-3 text-center relative">
              <p>Status: {objData.status}</p>
              <span className="flex"> | </span>
              <p className="">
                ReleaseDate:
                {moment(objData?.release_date).format("MMMM Do YYYY")}
              </p>
              <span className="flex"> | </span>
              <p>Revenue: {Number(objData?.revenue)}</p>
            </div>
            <Divider />
          </div>
          <div className="text-sm">
            <p>
              <span className="text-white">Director:</span>{" "}
              {cast?.crew[0]?.name}
            </p>
            <Divider />
            <p>
              <span className="text-white">Writer:</span> {writer}
            </p>
          </div>

          <Divider />
          <h2 className="font-bold text-lg">Cast:</h2>
          {/* <div className="grid grid-cols-"> */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
            {cast.cast
              .filter((el) => el?.profile_path)
              .map((cast, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 justify-center items-center"
                  >
                    <div className="bg-neutral-700  w-20 h-20 rounded-full relative ">
                      <img
                        src={imageURL + cast?.profile_path}
                        className="w-20 h-20 rounded-full object-top"
                      />
                    </div>
                    <p className="text-xs text-center">{cast?.name}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      
      {similar.length > 0 && (
        <div>
          <HorizontalScrollCard
            data={similar}
            heading={"Similar " + params.explore}
            media_type={params.explore}
          />
        </div>
      )}

      {recommendation.length > 0 && (
        <div>
          <HorizontalScrollCard
            data={recommendationData}
            heading={"Recommendations " + params.explore}
            media_type={params.explore}
          />
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
