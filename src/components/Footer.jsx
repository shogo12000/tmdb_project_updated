import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <footer className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 bg-gray-800 text-white"> 
            <div className="flex items-center justify-center  gap-4">
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </div>
            <p className="text-sm">Created by Shogo</p>
        </footer>
    )
}

export default Footer