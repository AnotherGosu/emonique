import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Label } from "@/components/Typography";

export const ContactForm = () => {
  return (
    <form className="grid grid-cols-2 gap-4">
      <div>
        <Label
          htmlFor="name"
          required
        >
          Name
        </Label>

        <Input
          id="name"
          required
        />
      </div>

      <div>
        <Label
          htmlFor="email"
          required
        >
          Email
        </Label>

        <Input
          id="email"
          type="email"
          required
        />
      </div>

      <div className="col-span-2">
        <Label
          htmlFor="message"
          required
        >
          Message
        </Label>

        <Textarea
          id="message"
          required
        />
      </div>

      <Button type="submit">Send</Button>
    </form>
  );
};
