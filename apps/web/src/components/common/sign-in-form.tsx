"use client";
import { signIn } from "@/actions/auth.actions";
import { cn } from "@/lib/utils";
import Form from "next/form";
import { useActionState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SubmitButton from "./submit-button";

type FormField = {
  label: string;
  name: "email" | "password";
  type?: string;
  placeholder: string;
};

const FORM_FIELDS: FormField[] = [
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "john@example.com",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "",
  },
];

type ValidationErrors = {
  [key: string]: string | string[];
};

const SigninForm = () => {
  const [state, action] = useActionState(signIn, undefined);

  const renderError = (
    fieldName: string,
    errors: ValidationErrors | undefined,
  ) => {
    if (!errors?.[fieldName]) return null;

    return <p className="text-destructive">{errors[fieldName]}</p>;
  };

  return (
    <Form action={action} className="space-y-4">
      {FORM_FIELDS.map(({ label, name, type = "text", placeholder }) => (
        <div key={name} className="flex flex-col gap-2">
          <Label
            htmlFor={name}
            className={cn(state?.errors?.[name] && "text-destructive")}
          >
            {label}
          </Label>
          <Input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            className={cn(state?.errors?.[name] && "border-destructive")}
            defaultValue={state?.data?.[name]}
          />
          {renderError(name, state?.errors)}
        </div>
      ))}
      <SubmitButton>Sign In</SubmitButton>
    </Form>
  );
};

export default SigninForm;
