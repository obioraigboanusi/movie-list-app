import { createBrowserRouter, Navigate } from "react-router-dom";
import Movies from "./pages/Movies";
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
                element: <Movies />,
            },
            {
                path: "/movies/:movieId",
                element: <MovieDetails />,
            },
        ],
    },
]);

export default router;
