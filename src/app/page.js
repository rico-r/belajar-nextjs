import { MovieGroup, MovieGroup2 } from "@/components/moviegroup";

const sample = [
  {
    name: "Incredibles 2",
    year: 2018,
    rating: 7.3,
    quality: "hd",
    categories: ["Action", "Adventure", "Comedy", "BluRay", "2023", "1080"],
    img: "/img/film-incredibles-2-2018-lk21.jpg",
  },
  {
    name: "Ant-Man and the Wasp: Quantumania",
    year: 2023,
    rating: 6.6,
    quality: "hd",
    categories: [
      "Action",
      "Adventure",
      "Animation",
      "Comedy",
      "Family",
      "Sci-fi",
      "Usa",
      "BluRay",
      "2018",
      "1080",
    ],
    img: "/img/film-ant-man-and-the-wasp-quantumania-2023-lk21-d21.jpg",
  },
];

function createList(sample, count) {
  const result = [];
  for (var i = 0; i < count; i++) {
    result.push(sample[Math.floor(Math.random() * sample.length)]);
  }
  return result;
}

const latest = createList(sample, 12);
const popular = createList(sample, 8);
const recomended = createList(sample, 6);

export default function Home() {
  return (
    <div>
      <MovieGroup
        title="MOVIE TERBARU"
        cols="6"
        list={latest}
        className="w-5/6"
      />
      <MovieGroup
        title="FILM TERPOPULER"
        cols="8"
        list={popular}
        className="w-full"
      />
      <MovieGroup2
        title="FILM REKOMENDASI"
        cols="6"
        list={recomended}
        className="w-full"
      />
    </div>
  );
}
