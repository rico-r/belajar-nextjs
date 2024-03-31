import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavTab } from "@/components/nav-tab";
import { NavItem } from "@/components/nav-item";

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

export default function Header() {
  return (
    <>
      <div className="py-2 bg-orange-700">
        <span className="text-2xl text-white">MovieKita</span>
        <form className="ms-4 float-right" method="get" action="">
          <input
            className="rounded-s-md border-solid border-2 p-1 border-white"
            type="search"
            placeholder="Cari..."
            name="q" />
          <button
            type="submit"
            className="rounded-e-md border-solid border-2 px-3 py-1 border-white text-white">
            <FontAwesomeIcon className="inline-block" height="1em" icon="search" />
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
        {categories.map((category, index) =>
          <NavItem key={index} text={category.name} href={category.link} />
        )}
      </div>
    </>
  );
}
