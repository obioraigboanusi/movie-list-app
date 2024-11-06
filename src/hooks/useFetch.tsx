import { useEffect, useRef, useState } from "react";
import api from "../config/api";

const useFetch = <T,>({
    url,
    page,
    query,
    disabled = false,
}: {
    url: string;
    page?: number;
    query?: string;
    disabled?: boolean;
}): {
    data: T | null;
    isLoading: boolean;
    isFetching: boolean;
    error: string;
} => {
    const [data, setData] = useState<T | null>(null);
    const isFirstLoad = useRef(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (disabled || !url) return;

        let isCancelled = false;
        setError("");

        if (isFirstLoad.current) {
            setIsLoading(true);
        } else {
            setIsFetching(true);
        }

        (async () => {
            try {
                const res = await api.get(url, {
                    params: { page, query },
                });
                if (!isCancelled) {
                    setData(res.data);
                }
            } catch (error: unknown) {
                if (!isCancelled) {
                    setError(
                        error instanceof Error
                            ? error.message
                            : "An unknown error occurred"
                    );
                }
            } finally {
                if (!isCancelled) {
                    if (isFirstLoad.current) {
                        setIsLoading(false);
                        isFirstLoad.current = false;
                    }
                    setIsFetching(false);
                }
            }
        })();

        return () => {
            isCancelled = true;
        };
    }, [url, disabled, page, query]);

    return { data, isLoading, isFetching, error };
};

export default useFetch;
