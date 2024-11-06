const endpoints = {
    MOVIES: "movie/popular",
    MOVIES_DETAILS: (movieId: string | undefined) => `movie/${movieId}`,
    SEARCH_MOVIES: "search/movie",
};

export default endpoints;
