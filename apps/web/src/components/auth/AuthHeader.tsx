import { AuthHeaderProps } from "@/types/auth/AuthHeaderProps";
import Image from "next/image";
import React from "react";

export default function AuthHeader({ label }: AuthHeaderProps) {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <Image
          src="/logov3.png"
          width={450}
          height={100}
          alt="Picture of the Quillkalam logo"
        />

        <p className="text-muted-foreground  text-md">{label}</p>
      </div>
    </React.Fragment>
  );
}
