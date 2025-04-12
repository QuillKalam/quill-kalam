import React from "react";

export default async function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
}
