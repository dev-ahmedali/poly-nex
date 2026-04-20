"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-4">
      {/* Page info */}
      <p className="text-sm text-[var(--muted)]">
        Page{" "}
        <span className="font-semibold text-[var(--text)]">{currentPage}</span>{" "}
        of{" "}
        <span className="font-semibold text-[var(--text)]">{totalPages}</span>
      </p>

      {/* Pagination box */}
      <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-[var(--surface)]/70 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        {/* Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--text)] transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous page"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Pages */}
        <div className="flex items-center gap-2">
          {visiblePages.map((page, index) =>
            page === "..." ? (
              <span
                key={`ellipsis-${index}`}
                className="px-2 text-sm text-[var(--muted)]"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page as number)}
                className={`min-w-[44px] rounded-xl px-4 py-2 text-sm font-medium transition ${
                  currentPage === page
                    ? "bg-gradient-to-r from-[var(--royal-blue)] via-[var(--bright-blue)] to-[var(--sky-blue)] text-[var(--bg)] shadow-[0_8px_20px_rgba(47,141,245,0.35)]"
                    : "border border-white/10 bg-white/5 text-[var(--muted)] hover:bg-white/10 hover:text-[var(--text)]"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--text)] transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Next page"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}