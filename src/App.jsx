import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MobileNavigation from "./components/MobileNavigation.jsx";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setImageURL, setBannerData } from './store/movieSlice'

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week?language=en-US");  
      dispatch(setBannerData(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchConfiguration = async()=>{
    try{
      const response = await axios.get("/configuration");
 
      dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    }catch(error){

    }
  }

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);

  return (
    <main className="pb-13 lg:pb-0 ">
      <Header />
      <div className="w-full h-full" >
        <Outlet />
      </div> 
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
