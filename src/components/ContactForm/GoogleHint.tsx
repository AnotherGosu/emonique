import { PropsWithDict } from "@/types/common";

export const GoogleHint = ({ dict }: PropsWithDict) => {
  return (
    <p
      className="text-xs [&>a]:underline [&>a]:underline-offset-2"
      dangerouslySetInnerHTML={{ __html: dict["contact"]["google"] }}
    />
  );
};
