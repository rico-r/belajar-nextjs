import { Movie, MovieCard, MovieCardTitle2 } from "@/components/movie-card";

const gridCols = {
  6: "grid-cols-6",
  8: "grid-cols-8",
};

export function MovieGroup({ title, list, cols = 8, className }: { title: string, list: Movie[], cols: number, className?: string }) {
  return (
    <div
      className={`my-3 bg-white border-solid border-2 border-gray-300 ${className}`}
    >
      <div className="m-3 flex">
        <div className="font-semibold font-sans text-xl flex-grow align-middle">
          {title}
        </div>
        <button className="p-1 text-xs font-sans bg-orange-500 hover:bg-orange-300 font-bold text-white">
          SEMUA
        </button>
      </div>
      <div className={`m-3 grid ${gridCols[cols]} gap-2`}>
        {list.map((movie) => (
          <MovieCard key={null} data={movie} />
        ))}
      </div>
    </div>
  );
}

export function MovieGroup2({ title, list, cols = 8, className }: { title: string, list: Movie[], cols?: number, className?: string }) {
  return (
    <div
      className={`my-3 bg-white border-solid border-2 border-gray-300 pb-4 relative ${className}`}
    >
      <div className="m-3 flex">
        <div className="font-semibold font-sans text-xl flex-grow align-middle">
          {title}
        </div>
      </div>
      <div className={`m-3 grid grid-cols-${cols} gap-2`}>
        {list.map((movie) => (
          <MovieCardTitle2 key={null} className="" data={movie} />
        ))}
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 text-center"
        style={{ bottom: "-0.75em" }}
      >
        <button className="text-xs bg-green-800 text-white p-1">
          Tampilkan Lebih Banyak
        </button>
      </div>
    </div>
  );
}
