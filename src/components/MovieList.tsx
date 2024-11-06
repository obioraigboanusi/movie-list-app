import MovieItem from "./MovieItem";

interface IProps {
    items: Movie[];
}

function MovieList({ items = [] }: IProps) {
    return (
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items?.map((movie) => (
                    <li key={movie.id}>
                        <MovieItem movie={movie} />
                    </li>
                ))}
            </ul>
            {items?.length === 0 && (
                <p className="text-center mt-10">
                    <i>List is empty</i>
                </p>
            )}
        </div>
    );
}

export default MovieList;
