import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { MovieGroup, MovieGroup2 } from "@/components/movie-group";
import { MovieCard } from "@/components/movie-card";
import * as Movie from "@/models/movie";

function createList(sample: Movie.Movie[], count: number) {
  const result = [];
  for (var i = 0; i < count; i++) {
    result.push(sample[Math.floor(Math.random() * sample.length)]);
  }
  return result;
}


export default async function Home() {
  const sample = await Movie.getAll();
  const latest = createList(sample, 12);
  const popular = createList(sample, 8);
  const recomended = createList(sample, 6);

  return (
    <>
      <div className="bg-black flex py-5">
        <FontAwesomeIcon
          className="text-white my-auto mx-1 hover:text-orange-200"
          height="2em"
          icon="arrow-circle-left"
        />
        <div className="grid w-full grid-cols-6 gap-2">
          {createList(sample, 6).map(data => {
            return (
              <MovieCard key={null} data={data} />
            );
          })}
        </div>
        <FontAwesomeIcon
          className="text-white my-auto mx-1 hover:text-orange-200"
          height="2em"
          icon="arrow-circle-right"
        />
      </div>
      <div>
        <MovieGroup title="MOVIE TERBARU" cols={6} list={latest} className="w-5/6" />
        <MovieGroup title="FILM TERPOPULER" cols={8} list={popular} className="w-full" />
        <MovieGroup2 title="FILM REKOMENDASI" cols={6} list={recomended} className="w-full" />
      </div>
    </>
  );
}
