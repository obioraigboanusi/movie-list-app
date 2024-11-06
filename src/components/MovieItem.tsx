import moment from "moment";
import { Link } from "react-router-dom";
import { useState } from "react";

function MovieItem({ movie }: { movie: Movie }) {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <Link
            to={`/movies/${movie.id}`}
            className="shadow-md hover:shadow-xl rounded-md h-full group flex flex-col"
        >
            <div
                className="relative w-full  rounded-t-md"
                style={{
                    aspectRatio: "2/3",
                }}
            >
                {isLoading && (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-t-md block w-full h-hull z-10" />
                )}
                <img
                    src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                    loading="lazy"
                    alt={movie.title}
                    className="rounded-t-md group-hover:scale-105 transition-all object-cover"
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="p-4">
                <h3 className="font-bold text-lg group-hover:text-teal-600">
                    {movie.title}
                </h3>
                <p>{moment(movie.release_date).format("MMM DD, YYYY")}</p>
            </div>
        </Link>
    );
}

export default MovieItem;
