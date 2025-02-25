import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
 

const SearchPage = () => {
  const location = useLocation();
  const [searchParam] = useSearchParams();
  const query = searchParam.get("q") || "";
  const [data, setData] = useState([]);
  const explore = "explorer";
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const navigate = useNavigate();

  const fetchData = async () => {
    if (page < totalPage) {
      try {
        const response = await axios.get(`/search/multi`, {
          params: {
            query: query,
          },
        });
        setData((prev) =>
          page === 0
            ? response.data.results
            : [...prev, ...response.data.results]
        );
        setTotalPage(response.data.total_pages);
 
      } catch (error) {
        console.log("error ", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [ page]);

  useEffect(() => {
    setPage(0);
    setTotalPage(1);
    setData([])
    fetchData();
  }, [query ]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight) {
      setPage((value) => value + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-16 min-h-[calc(100vh-132px)]  sm:min-h-[calc(100vh-113px)]  md:min-h-[calc(100vh-112px)] lg:min-h-[calc(100vh-56px)]  ">
      <div className="sticky top-16.5 md:hidden z-50">
        <input type="text" 
            placeholder="Search here..."
            onChange={(e)=>navigate(`/search?q=${e.target.value}`)}
            className="text-black px-4 py-1 text-lg w-full bg-gray-100 rounded-md outline-none "
        />
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Search Results
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
          {data.map((exploreData, index) => {
            return <Card data={exploreData} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
