import Link from "next/link";
import { FC } from "react";
import Navbar from "./navbar";

export const Header: FC = () => {
  return (
    <header className="bg-gray/50 sticky top-0 z-30 py-4 shadow backdrop-blur-xl dark:shadow-white/10">
      <div className="container flex flex-wrap items-center gap-4">
        <Link href={"/"}>Logo</Link>
        <Navbar />
      </div>
    </header>
  );
};
