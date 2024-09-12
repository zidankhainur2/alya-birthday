"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import GoogleIcon from "../../public/google.svg";
import { signIn } from "next-auth/react";

export default function GoogleSigninButton() {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <Image src={GoogleIcon} alt="Google Icon" className="w-6 h-6" />
    </Button>
  );
}
