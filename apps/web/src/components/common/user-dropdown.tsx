"use client";
import { SessionUser } from "@/lib/session";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type Props = {
  user: SessionUser;
};

const UserDropdown = ({ user }: Props) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await fetch("/api/auth/signout");
    router.refresh();
  };

  const getAvatarFallback = (name: string) => {
    const words = name.trim().split(/\s+/);
    return words.length > 1
      ? words.map((word) => word[0]).join("")
      : name.slice(0, 2);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-9 cursor-pointer">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>
            {getAvatarFallback(user.name || "John Doe")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Logged in as {user.name}</DropdownMenuLabel>
        <DropdownMenuItem>{user.email}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOutIcon className="mr-2 size-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
