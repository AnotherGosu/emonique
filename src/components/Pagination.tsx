"use client";

import { ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { PageInfo } from "@/types/common";

import { Button } from "@/components/Button";

export const Pagination = ({ hasNextPage, hasPreviousPage }: PageInfo) => {
  const { page, onNavigation } = usePagination();

  return (
    <nav className="mt-8 flex items-center justify-center gap-10">
      <Button
        aria-description="Previous page"
        disabled={!hasPreviousPage}
        onClick={() => onNavigation(page - 1)}
      >
        <ChevronsLeftIcon />
      </Button>

      <div className="text-xl font-semibold">{page}</div>

      <Button
        aria-description="Next page"
        disabled={!hasNextPage}
        onClick={() => onNavigation(page + 1)}
      >
        <ChevronsRightIcon />
      </Button>
    </nav>
  );
};

const usePagination = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") || 1);

  const onNavigation = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newPage === 1) {
      params.delete("page");
    } else {
      params.set("page", newPage.toString());
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", `${page + 1}`);

    router.prefetch(`${pathname}?${params.toString()}`);
  }, [router, page, pathname, searchParams]);

  return { page, onNavigation };
};
