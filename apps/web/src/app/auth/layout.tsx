import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <main className="h-full flex items-center justify-center ">
        {children}
      </main>
    </React.Fragment>
  );
}
