import { getSession } from "@/lib/session";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/button";
import Navbar from "./navbar";
import UserDropdown from "./user-dropdown";

export const Header: FC = async () => {
  const session = await getSession();
  return (
    <header className="bg-gray/50 sticky top-0 z-30 py-4 shadow backdrop-blur-xl dark:shadow-white/10">
      <div className="container flex flex-wrap items-center gap-4">
        <Link href={"/"}>Logo</Link>
        <Navbar />
        {session ? (
          <UserDropdown user={session.user} />
        ) : (
          <Button asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
        )}
      </div>
    </header>
  );
};
