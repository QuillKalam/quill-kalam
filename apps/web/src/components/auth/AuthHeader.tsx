import { cn } from "@/lib/utils";
import { AuthHeaderProps } from "@/types/auth/AuthHeaderProps";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

export default function AuthHeader({ label }: AuthHeaderProps) {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <Image
          src="/logov2.png"
          width={250}
          height={450}
          alt="Picture of the Quillkalam logo"
          className="mix-blend-multiply"
        />

        <p className="text-muted-foreground  text-md">{label}</p>
      </div>
    </React.Fragment>
  );
}
