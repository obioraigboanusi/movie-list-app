import { Navigate, useLocation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import endpoints from "../config/apiEndpoints";
import moment from "moment";
import BreadCrumb from "../components/BreadCrumb";
import Spinner from "../components/Spinner";

function MovieDetails() {
    const { movieId } = useParams();
    const { pathname } = useLocation();
    const {
        data: movie,
        isLoading,
        error,
    } = useFetch<IMovieDetails>(
        endpoints.MOVIES_DETAILS(movieId),
        undefined,
        !movieId
    );

    if (isLoading && !movie) {
        return <Spinner />;
    }
    if (error) {
        return <Navigate to="/not-found" />;
    }
    const breadcrumbs = [
        { name: "Movies", url: "/movies" },
        { name: movie?.title, url: pathname },
    ];

    return (
        <section
            style={{
                background: `url(${
                    import.meta.env.VITE_IMAGE_URL + movie?.backdrop_path
                }) no-repeat center center`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // height: "100vh",
            }}
            className="text-white"
        >
            <div className="bg-black bg-opacity-85 h-full">
                <div className="container">
                    <BreadCrumb items={breadcrumbs} />
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            <div className="md:col-span-2">
                                <img
                                    src={
                                        import.meta.env.VITE_IMAGE_URL +
                                        movie?.poster_path
                                    }
                                    alt={movie?.title}
                                    className="w-full"
                                />
                            </div>
                            <div className="space-y-4 md:col-span-3">
                                <div className=" space-y-4">
                                    <h1 className="text-7xl font-bold">
                                        {movie?.title}
                                    </h1>
                                    <p>
                                        <span className="inline-block p-1 px-3 bg-teal-600  bg-opacity-50 rounded-lg mr-4">
                                            {movie?.status}
                                        </span>
                                        {moment(movie?.release_date).format(
                                            "MMM DD, YYYY"
                                        )}{" "}
                                        | {movie?.origin_country}
                                    </p>
                                </div>
                                <div>
                                    <i>{movie?.tagline}</i>
                                </div>
                                <div className="">
                                    <h2 className="text-2xl font-semibold">
                                        Overview
                                    </h2>
                                    <p>{movie?.overview}</p>
                                </div>
                                <div className="">
                                    <h2 className="text-2xl font-semibold">
                                        Genres
                                    </h2>
                                    <p>
                                        {movie?.genres
                                            .map((genre) => genre.name)
                                            .join(", ")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieDetails;
