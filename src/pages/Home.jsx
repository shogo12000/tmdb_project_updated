 
import { Counter } from "../store/Counter";
import { useSelector, useDispatch } from "react-redux";
import BannerHome from "../components/BannerHome";
import Card from "../components/Card";
import HorizontalScrollCard from "../components/HorizontalScrollCard";

import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingMovie = useSelector((state) => state.counterx.bannerData); 
  const { data: playingData, loading: loadingData, error: loadingError } = useFetch("/movie/now_playing");
  const { data: topRated, loading: loadingRated, error: errorRated } = useFetch("/movie/top_rated");
  const { data: popularTvShowData, loading: loadingTvShowData, error: errorTvShowData } = useFetch("/tv/popular");
  const { data: topTvAir, loading: loadingTvAir, error: errorTvAir } = useFetch("/tv/on_the_air");

  if (loadingData || loadingRated || loadingTvShowData || loadingTvAir) {   
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <p>loading</p>
      </div>
    );
  }

  if (loadingError || errorRated || errorTvShowData || errorTvAir ){
    return (
      <div>
        <p>error fetching movies... try again</p>
      </div>
    )
  }

 
  return (
    <>
      <BannerHome />
      <HorizontalScrollCard data={trendingMovie} heading={"Trending Movie"} trending={true} media_type={"movie"}/>
      <HorizontalScrollCard data={playingData} heading={"Now Playing"} media_type={"movie"} />
      <HorizontalScrollCard data={topRated} heading={"Top Rated"} media_type={"movie"} />
      <HorizontalScrollCard data={popularTvShowData} heading={"Popular Tv"} media_type={"tv"} />
      <HorizontalScrollCard data={topTvAir} heading={"Top Air"} media_type={"tv"} />
    </>
  );
};

export default Home;
