import MovieItem from "./MovieItem";

interface IProps {
    items: Movie[];
    isLoading: boolean;
}

function MovieList({ items = [], isLoading }: IProps) {
    return (
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {isLoading
                    ? Array.from({ length: 20 }).map((_, index) => (
                          <li key={index} className="shadow-md rounded-md">
                              <div
                                  className="relative w-full rounded-t-md"
                                  style={{ aspectRatio: "2/3" }}
                              >
                                  <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-t-md" />
                              </div>
                              <div className="p-4">
                                  <div className="h-6 bg-gray-300 animate-pulse rounded-md mb-2"></div>
                                  <div className="h-4 bg-gray-300 animate-pulse rounded-md w-3/4"></div>
                              </div>
                          </li>
                      ))
                    : items?.map((movie) => (
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
