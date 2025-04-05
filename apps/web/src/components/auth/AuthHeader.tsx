import { cn } from "@/lib/utils";
import { AuthHeaderProps } from "@/types/auth/AuthHeaderProps";
import { Poppins } from "next/font/google";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function AuthHeader({ label }: AuthHeaderProps) {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <h1 className={cn("text-3xl font-semibold", font.className)}>
          Quill<span className="text-blue-500">Kalam</span>
        </h1>
        <p className="text-muted-foreground text-sm">{label}</p>
      </div>
    </React.Fragment>
  );
}
