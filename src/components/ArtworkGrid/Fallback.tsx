import { cn } from "@/utils/cn";

export const Fallback = ({ idx }: { idx: number }) => {
  return (
    <div
      className={cn("row-span-2 grid grid-rows-[1fr_36px] gap-3 p-3", {
        "row-span-3": idx % 4 === 0,
      })}
    >
      <div className="animate-pulse rounded-xs bg-neutral-200 transition" />

      <div className="flex flex-col justify-between gap-1 *:h-full *:animate-pulse *:rounded-xs *:bg-neutral-200 *:transition">
        <span className="w-1/2" />
        <span className="w-1/3" />
      </div>
    </div>
  );
};
