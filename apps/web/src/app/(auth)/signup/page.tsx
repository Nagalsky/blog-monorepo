import SignupForm from "@/components/common/sign-up-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold md:text-4xl">Sign up</h1>
      <SignupForm />
      <div className="space-y-4 text-center">
        <p>Already have an account?</p>
        <Button asChild>
          <Link href="/signin">Sign in</Link>
        </Button>
      </div>
    </>
  );
}
