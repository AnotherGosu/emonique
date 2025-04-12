import { Button } from "../Button";
import { useFormStatus } from "react-dom";

import { PropsWithDict } from "@/types/common";

export const SubmitButton = ({ dict }: PropsWithDict) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      isLoading={pending}
      className="shrink-0"
    >
      {dict["buttons"]["send"]}
    </Button>
  );
};
