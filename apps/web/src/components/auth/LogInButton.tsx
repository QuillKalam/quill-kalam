"use client";
import { LogInButtonProps } from "@/types/auth/LogInButtonProps";
import React from "react";
import { useRouter } from "next/navigation";

export default function LogInButton({
  children,
  mode = "redirect",
  asChild,
}: LogInButtonProps) {
  const router = useRouter();
  
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    // TODO: Implement modal login
  }
  return (
    <React.Fragment>
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>
    </React.Fragment>
  );
}
