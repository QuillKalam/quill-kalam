import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

export default async function Settings() {
  const session = await auth();
  return (
    <React.Fragment>
      <h1>Settings page</h1>
    </React.Fragment>
  );
}
