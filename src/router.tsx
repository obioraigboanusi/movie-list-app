import { createBrowserRouter, Navigate } from "react-router-dom";
import MovieList from "./pages/MovieList";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import MovieDetails from "./pages/MovieDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="movies" />,
        errorElement: <ErrorPage />,
    },
    {
        element: <Layout />,
        children: [
            {
                path: "/movies",
                element: <MovieList />,
            },
            {
                path: "/movies/:id",
                element: <MovieDetails />,
            },
        ],
    },
]);

export default router;
