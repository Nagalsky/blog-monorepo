import SigninForm from "@/components/common/sign-in-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold md:text-4xl">Sign in</h1>
      <SigninForm />
      <div className="space-y-4 text-center">
        <Button asChild variant={"link"}>
          <Link href="/forgot-password">Forgot your password?</Link>
        </Button>
      </div>
    </>
  );
}
