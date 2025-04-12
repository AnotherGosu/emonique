import { PropsWithDict } from "@/types/common";

import { cn } from "@/utils/cn";

import { Input, Textarea } from "@/components/Inputs";
import { Label } from "@/components/Typography";

export const FormFields = ({ dict }: PropsWithDict) => {
  return (
    <div className="flex flex-col gap-4">
      <div className={cn("grid grid-cols-1 gap-4", "@md:grid-cols-2")}>
        <div>
          <Label
            htmlFor="name"
            required
          >
            {dict["phrases"]["name"]}
          </Label>

          <Input
            id="name"
            name="name"
            autoComplete="true"
            required
          />
        </div>

        <div>
          <Label
            htmlFor="email"
            required
          >
            {dict["phrases"]["email"]}
          </Label>

          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="true"
            required
          />
        </div>
      </div>

      <div>
        <Label
          htmlFor="message"
          required
        >
          {dict["phrases"]["message"]}
        </Label>

        <Textarea
          id="message"
          name="message"
          required
        />
      </div>
    </div>
  );
};
