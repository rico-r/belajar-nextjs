import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavTab } from "@/components/navtab";
import { NavItem } from "@/components/navitem";
import { MovieCardTitle } from "@/components/moviecard";

const categories = [
  { name: "action", link: "#" },
  { name: "anime", link: "#" },
  { name: "horor", link: "#" },
  { name: "sci-fi", link: "#" },
  { name: "komedi", link: "#" },
  { name: "romamce", link: "#" },
  { name: "mandarin", link: "#" },
  { name: "india", link: "#" },
  { name: "jepang", link: "#" },
  { name: "korea", link: "#" },
  { name: "thailand", link: "#" },
  { name: "2022", link: "#" },
  { name: "2023", link: "#" },
  { name: "bluray", link: "#" },
  { name: "terpopuler", link: "#" },
];

const movie = [
  {
    name: "Incredibles 2",
    year: 2018,
    rating: 7.3,
    quality: "hd",
    img: "/img/film-incredibles-2-2018-lk21.jpg",
  },
  {
    name: "Ant-Man and the Wasp: Quantumania",
    year: 2023,
    rating: 6.6,
    quality: "hd",
    img: "/img/film-ant-man-and-the-wasp-quantumania-2023-lk21-d21.jpg",
  },
  {
    name: "Incredibles 2",
    year: 2018,
    rating: 7.3,
    quality: "hd",
    img: "/img/film-incredibles-2-2018-lk21.jpg",
  },
  {
    name: "Ant-Man and the Wasp: Quantumania",
    year: 2023,
    rating: 6.6,
    quality: "hd",
    img: "/img/film-ant-man-and-the-wasp-quantumania-2023-lk21-d21.jpg",
  },
  {
    name: "Incredibles 2",
    year: 2018,
    rating: 7.3,
    quality: "hd",
    img: "/img/film-incredibles-2-2018-lk21.jpg",
  },
  {
    name: "Ant-Man and the Wasp: Quantumania",
    year: 2023,
    rating: 6.6,
    quality: "hd",
    img: "/img/film-ant-man-and-the-wasp-quantumania-2023-lk21-d21.jpg",
  },
];

export default function Header() {
  return (
    <>
      <div className="py-2 bg-orange-700">
        <span className="text-2xl text-white">LayarTV</span>
        <form className="ms-4 float-right" method="get" action="">
          <input
            className="rounded-s-md border-solid border-2 p-1 border-white"
            type="search"
            placeholder="Cari..."
            name="q"
          />
          <button
            type="submit"
            className="rounded-e-md border-solid border-2 px-3 py-1 border-white text-white"
          >
            <FontAwesomeIcon
              className="inline-block"
              height="1em"
              icon="search"
            />
          </button>
        </form>
      </div>
      <div className="bg-orange-500">
        <NavTab text="Home" icon="home" className="bg-orange-400" />
        <NavTab text="Genre" icon="film" />
        <NavTab text="Series" icon="heart" />
        <NavTab text="Populer" icon="star" />
        <NavTab text="Negara" icon="globe-asia" />
        <NavTab text="Tahun" icon="list-numeric" />
      </div>
      <div className="bg-orange-400">
        {categories.map((category) => (
          <NavItem text={category.name} link={category.link} />
        ))}
      </div>
      <div className="bg-black flex py-5">
        <FontAwesomeIcon
          className="text-white my-auto mx-1 hover:text-orange-200"
          height="2em"
          icon="arrow-circle-left"
        />
        <div className="grid w-full grid-cols-6 gap-2">
          {movie.map((data) => (
            <MovieCardTitle data={data} />
          ))}
        </div>
        <FontAwesomeIcon
          className="text-white my-auto mx-1 hover:text-orange-200"
          height="2em"
          icon="arrow-circle-right"
        />
      </div>
    </>
  );
}
