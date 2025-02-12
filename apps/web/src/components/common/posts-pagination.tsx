import { calculatePageNumber } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  totalPages: number;
  currentPage: number;
  pageNeighbors?: number;
  className?: string;
};

const PostsPagination = ({
  totalPages,
  currentPage,
  pageNeighbors = 2,
  className,
}: Props) => {
  const pageNumber = calculatePageNumber({
    pageNeighbors,
    currentPage,
    totalPages,
  });

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2",
        className,
      )}
    >
      <Button variant={"outline"} asChild>
        <Link
          href={`?page=${currentPage - 1}`}
          scroll={false}
          className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
        >
          <ChevronLeft />
        </Link>
      </Button>

      {pageNumber.map((page, index) => (
        <Button
          key={index}
          variant={
            currentPage !== page && page !== "..." ? "outline" : "default"
          }
          asChild
        >
          {page === "..." ? (
            "..."
          ) : (
            <Link href={`?page=${page}`} scroll={false}>
              {page}
            </Link>
          )}
        </Button>
      ))}

      <Button variant={"outline"} asChild>
        <Link
          href={`?page=${currentPage + 1}`}
          scroll={false}
          className={cn(
            currentPage === totalPages && "pointer-events-none opacity-50",
          )}
        >
          <ChevronRight />
        </Link>
      </Button>
    </div>
  );
};

export default PostsPagination;
