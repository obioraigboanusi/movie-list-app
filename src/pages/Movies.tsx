import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import endpoints from "../config/apiEndpoints";
import useFetch from "../hooks/useFetch";
import { Navigate, useSearchParams } from "react-router-dom";
import Modal from "../components/Modal";
import { isEmpty } from "lodash";

interface MoviesData {
    results: Movie[];
    total_pages: number;
    total_results: number;
    page: number;
}

function Movies() {
    const [params, setParams] = useSearchParams();
    const [isAdding, setIsAdding] = useState(false);

    const query = params.get("query") || undefined;
    const page = params.get("page") || 1;

    const {
        data: moviesData,
        isLoading,
        error,
        isFetching,
    } = useFetch<MoviesData>({
        url: query ? endpoints.SEARCH_MOVIES : endpoints.MOVIES,
        page: page as number,
        query,
    });

    const handleSetPage = (value: number) => {
        params.set("page", value.toString());
        setParams(params);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page, query]);

    if (error) {
        return <Navigate to="/not-found" />;
    }

    return (
        <section>
            <div className="container py-16 space-y-8">
                <header className="flex flex-col md:flex-row justify-between md;items-center gap-4">
                    <h2 className="font-bold text-2xl">Top Movies</h2>
                    <div className="flex justify-between items-center gap-4">
                        <Search />
                        <button
                            onClick={() => setIsAdding(true)}
                            className="bg-blue-600 text-white py-2 px-3 rounded"
                        >
                            Add New
                        </button>
                    </div>
                </header>
                <MovieList
                    items={moviesData?.results || []}
                    isLoading={isFetching || isLoading}
                />
                {!isEmpty(moviesData?.results) && (
                    <Pagination
                        currentPage={moviesData?.page as number}
                        totalPages={moviesData?.total_pages as number}
                        onPageChange={handleSetPage}
                    />
                )}
            </div>
            {isAdding && (
                <Modal isOpen={isAdding} onClose={() => setIsAdding(false)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis consequatur odit sequi eius cumque ratione
                    voluptatibus fuga eaque, excepturi, sapiente dolores
                    doloremque necessitatibus. Ut, unde expedita. Quibusdam et
                    pariatur maiores.
                </Modal>
            )}
        </section>
    );
}

export default Movies;
