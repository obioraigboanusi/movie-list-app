const endpoints = {
    MOVIES: "movie/popular",
    MOVIES_DETAILS: (movieId: string | undefined) => `movie/${movieId}`,
};

export default endpoints;
