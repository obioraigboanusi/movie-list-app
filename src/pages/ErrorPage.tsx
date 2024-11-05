import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center bg-red-200 h-screen space-y-4">
            <h1 className=" text-3xl ">Oops!</h1>
            <p>
                <i>Page Not Found</i>
            </p>
            <Link to="/" className="bg-blue-600 text-white py-2 px-3 rounded">
                Go to home page
            </Link>
        </div>
    );
}

export default ErrorPage;
