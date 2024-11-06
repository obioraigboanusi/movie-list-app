import { useEffect, useState } from "react";
import api from "../config/api";
import { AxiosRequestConfig } from "axios";

const useFetch = <T,>(
    url = "",
    options?: AxiosRequestConfig<never> | undefined,
    disabled = false
): { data: T | null; isLoading: boolean; error: string } => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (disabled) return;
        let isCancelled = false;
        setIsLoading(true);

        (async () => {
            try {
                const res = await api.get(url, options);
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
                    setIsLoading(false);
                }
            }
        })();

        return () => {
            isCancelled = true;
        };
    }, [url, options]);

    return { data, isLoading, error };
};

export default useFetch;
