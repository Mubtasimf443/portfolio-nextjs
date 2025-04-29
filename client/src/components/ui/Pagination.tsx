/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
    showFirstLast?: boolean;
    siblingsCount?: number;
}

const Pagination: FC<Props> = ({
    currentPage,
    totalPages,
    onPageChange,
    className = '',
    showFirstLast = true,
    siblingsCount = 1
}) => {
    // Generate page numbers array with dots
    const generatePaginationItems = () => {
        // Always show first page
        const items: (number | 'dots')[] = [1];
        
        if (totalPages <= 1) return items;

        // Calculate range
        const leftSiblingIndex = Math.max(currentPage - siblingsCount, 2);
        const rightSiblingIndex = Math.min(currentPage + siblingsCount, totalPages - 1);
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

        if (shouldShowLeftDots && shouldShowRightDots) {
            // Show both dots
            return [
                1,
                shouldShowLeftDots ? 'dots' : null,
                ...range(leftSiblingIndex, rightSiblingIndex),
                shouldShowRightDots ? 'dots' : null,
                totalPages
            ].filter(Boolean);
        }

        if (!shouldShowLeftDots && shouldShowRightDots) {
            // Show only right dots
            return [
                ...range(1, rightSiblingIndex),
                'dots',
                totalPages
            ];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            // Show only left dots
            return [
                1,
                'dots',
                ...range(leftSiblingIndex, totalPages)
            ];
        }

        // Show all pages without dots
        return range(1, totalPages);
    };

    const paginationItems = generatePaginationItems();

    return (
        <div className={`mt-12 flex justify-center items-center gap-2 ${className}`}>
            {/* Previous Button */}
            {showFirstLast && (
                <button
                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        ${currentPage === 1
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-800 text-gray-300 hover:bg-primary-500 hover:text-white'}
                        transition-colors
                    `}
                    aria-label="Previous page"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
            )}

            {/* Page Numbers */}
            {paginationItems.map((item, index) => {
                if (item === 'dots') {
                    return (
                        <span
                            key={`dots-${index}`}
                            className="w-10 h-10 flex items-center justify-center text-gray-400"
                        >
                            <MoreHorizontal className="w-5 h-5" />
                        </span>
                    );
                }

                return (
                    <button
                        key={item}
                        onClick={() => onPageChange(index + 1)}
                        className={`
                            w-10 h-10 rounded-full flex items-center justify-center
                            ${item === currentPage
                                ? 'bg-primary-500 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-primary-500 hover:text-white'}
                            transition-colors
                        `}
                        aria-label={`Page ${item}`}
                        aria-current={item === currentPage ? 'page' : undefined}
                    >
                        {item}
                    </button>
                );
            })}

            {/* Next Button */}
            {showFirstLast && (
                <button
                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        ${currentPage === totalPages
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-800 text-gray-300 hover:bg-primary-500 hover:text-white'}
                        transition-colors
                    `}
                    aria-label="Next page"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            )}
        </div>
    );
};

// Helper function to generate range of numbers
const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export default Pagination;