import { LogInBackButtonProps } from "@/types/auth/LogInBackButtonProps";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LogInBackButton({ label, href }: LogInBackButtonProps) {
  return (
    <React.Fragment>
      <Button variant="link" className="w-full font-normal" size="sm" asChild>
        <Link href={href}>{label}</Link>
      </Button>
    </React.Fragment>
  );
}
