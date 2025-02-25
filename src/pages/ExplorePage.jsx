import { useEffect, useState, useRef } from "react";
import { Counter } from "../store/Counter";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const { explore } = params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${explore}`, {
        params: {
          page: page,
        },
      });

      setData((prev) =>
        page === 1 ? response.data.results : [...prev, ...response.data.results]
      );

      setTotalPages(response.data.total_pages);
      console.log(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    setPage(1);
    setData([])
    fetchData();
  }, [explore]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight) {
      setPage((value) => value + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("eventListener");
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading Page...</p>
      </div>
    );
  }

  return (
    <div className="p-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Popular {explore} show
        </h3>
        {/* grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))]   */}
        <div
          id="TvMovies"
          className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4"
        >
          {data.map((exploreData, index) => {
            return <Card data={exploreData} key={index} media_type={explore} />;
          })}
        </div>

        <div className="w-full flex justify-between items-center">
          <button
            className="px-3 py-1 bg-cyan-700 rounded-md font-semibold"
            onClick={() => setPage((v) => v + 1)}
          >
            Back
          </button>
          <div className="">
            <p className="text-center">page:{page}</p>
            <p>total-pages = {totalPages}</p>
          </div>
          <button
            className="px-3 py-1 bg-cyan-700 rounded-md font-semibold"
            onClick={() => setPage((v) => v + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
