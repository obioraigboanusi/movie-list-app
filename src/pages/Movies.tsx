import MovieList from "../components/MovieList";
import Search from "../components/Search";
import endpoints from "../config/apiEndpoints";
import useFetch from "../hooks/useFetch";

interface MoviesData {
    results: Movie[];
    total_pages: number;
    total_results: number;
    page: number;
}

function Movies() {
    const { data: moviesData } = useFetch(endpoints.MOVIES);

    return (
        <section>
            <div className="container py-16 space-y-8">
                <header className="flex justify-between items-center">
                    <h2 className="font-bold text-2xl">Top Movies</h2>
                    <div className="flex justify-between items-center gap-4">
                        <Search />
                        <button className="bg-blue-600 text-white py-2 px-3 rounded">
                            Add Movie
                        </button>
                    </div>
                </header>
                <MovieList
                    items={(moviesData as MoviesData | null)?.results || []}
                />
            </div>
        </section>
    );
}

export default Movies;
