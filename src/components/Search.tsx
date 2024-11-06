import { useSearchParams } from "react-router-dom";

function Search() {
    const [params, setParams] = useSearchParams();

    const value = params.get("query") || "";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        params.set("query", value);
        params.set("page", "1");
        setParams(params);
    };

    return (
        <div className="relative">
            <input
                type="text"
                onChange={handleChange}
                value={value}
                className="h-[40px] pr-6 pl-2 border"
                placeholder="Search"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2">
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </span>
        </div>
    );
}

export default Search;
