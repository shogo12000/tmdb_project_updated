import { FaTv } from "react-icons/fa6";
import { BiCameraMovie } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
  {
    id: 1,
    label: "TV Shows",
    href: "tv",
    icon: <FaTv />,
  },
  {
    id: 2,
    label: "Movies",
    href: "movie",
    icon: <BiCameraMovie />,
  },
];

export const mobileNavigation = [
  {
    id: 3,
    label: "Home",
    href: "/",
    icon: <GoHomeFill />,
  },
  ...navigation,
  {
    id: 4,
    label: "search",
    href: "search",
    icon: <IoSearchOutline />,
  },
];
