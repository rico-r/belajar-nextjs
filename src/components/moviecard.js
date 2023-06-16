import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function MovieCardTitle({ data, className }) {
  return (
    <div
      className={`bg-white relative bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url('${data.img}')`,
        aspectRatio: "0.6667",
      }}
    >
      <div
        className="absolute left-0 right-0 bottom-0 text-center text-white text-xs font-sans py-1"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0.5))",
        }}
      >
        {data.name} ({data.year})
      </div>
      <div
        className="absolute top-0 right-0 p-1 text-xs text-white font-sans font-medium"
        style={{ background: "rgba(30, 100, 20, 0.9)" }}
      >
        {data.quality.toUpperCase()}
      </div>
      <div
        className="absolute top-0 left-0 p-1 text-xs text-white font-sans font-medium"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <FontAwesomeIcon
          height="0.8em"
          className="text-yellow-400 inline mr-1"
          icon="star"
        />
        {data.rating}
      </div>
    </div>
  );
}

export function MovieCardTitle2({ data, className }) {
  return (
    <div>
      <div
        className={`bg-white relative bg-cover bg-center ${className}`}
        style={{
          backgroundImage: `url('${data.img}')`,
          aspectRatio: "0.6667",
        }}
      >
        <div
          className="absolute top-0 right-0 p-1 text-xs text-white font-sans font-medium"
          style={{ background: "rgba(30, 100, 20, 0.9)" }}
        >
          {data.quality.toUpperCase()}
        </div>
        <div
          className="absolute top-0 left-0 p-1 text-xs text-white font-sans font-medium"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <FontAwesomeIcon
            height="0.8em"
            className="text-yellow-400 inline mr-1"
            icon="star"
          />
          {data.rating}
        </div>
      </div>
      <div className=" text-center font-semibold text-sm font-sans py-1">
        {data.name} ({data.year})
      </div>
      <div className="text-center text-xs font-sans">
        {data.categories.map((category) => (
          <>
            <a href="#" className="text-orange-700">
              {category}
            </a>
            {", "}
          </>
        ))}
      </div>
    </div>
  );
}
