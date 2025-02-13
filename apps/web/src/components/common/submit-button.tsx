"use client";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type Props = {
  className?: string;
  children?: React.ReactNode;
} & React.ComponentProps<"button">;

const SubmitButton = ({ className, children, ...rest }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className={cn("flex items-center gap-2", className)}
      type="submit"
      disabled={pending}
      {...rest}
    >
      {pending ? "Submitting" : (children ?? "Submit")}
    </Button>
  );
};

export default SubmitButton;
