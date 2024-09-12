"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { signOut, useSession } from "next-auth/react"; // Import useSession from next-auth
import React from "react";

const DEFAULT_AVATAR_URL =
  "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/avatar.png?t=2024-09-12T09%3A41%3A09.310Z";
export default function UserNav() {
  const { data: session } = useSession(); // Get session data

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
          <Avatar className="h-10 w-10 rounded-sm">
            {/* If session has user image, display it. Otherwise, fallback to default image */}
            {session?.user?.image ? (
              <AvatarImage
                src={session.user.image}
                alt={session.user.name || "User Avatar"}
              />
            ) : (
              <AvatarImage src={DEFAULT_AVATAR_URL} alt="Default Avatar" />
            )}
            {/* Fallback to initials if image is not available */}
            <AvatarFallback className="rounded-sm">
              {session?.user?.name?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            {/* Display user name if available */}
            <p className="text-sm font-medium leading-none">
              {session?.user?.name || "User"}
            </p>
            {/* Display user email if available */}
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email || "example@mail.com"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
