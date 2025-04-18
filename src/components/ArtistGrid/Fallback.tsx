export const Fallback = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_56px] gap-3 p-3">
      <span className="w-1/3 animate-pulse rounded-xs bg-neutral-200 transition" />

      <div className="animate-pulse rounded-xs bg-neutral-200 transition" />

      <div className="flex flex-col justify-between gap-1 *:h-full *:animate-pulse *:rounded-xs *:bg-neutral-200 *:transition">
        <span />
        <span className="w-1/2" />
        <span className="w-1/3" />
      </div>
    </div>
  );
};
