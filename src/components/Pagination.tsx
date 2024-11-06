import React, { useMemo } from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const handlePageClick = (page: number) => {
        if (page > 0 && page <= totalPages && page !== currentPage) {
            onPageChange(page);
        }
    };

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const pages = useMemo(() => {
        const range = 2;
        const pages = [];
        const start = Math.max(1, currentPage - range);
        const end = Math.min(totalPages, currentPage + range);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    }, [currentPage, totalPages]);

    return (
        <div className="flex items-center justify-center space-x-2">
            <button
                className={`px-4 py-2 rounded-md ${
                    currentPage === 1 ? "text-gray-400" : "text-teal-600"
                }`}
                onClick={handlePreviousClick}
                disabled={currentPage === 1}
            >
                &lt; Prev
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={`px-4 py-2 rounded-md ${
                        page === currentPage
                            ? "bg-teal-600 text-white"
                            : "text-teal-600"
                    }`}
                    onClick={() => handlePageClick(page)}
                >
                    {page}
                </button>
            ))}

            <button
                className={`px-4 py-2 rounded-md ${
                    currentPage === totalPages
                        ? "text-gray-400"
                        : "text-teal-600"
                }`}
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
            >
                Next &gt;
            </button>
        </div>
    );
};

export default Pagination;
