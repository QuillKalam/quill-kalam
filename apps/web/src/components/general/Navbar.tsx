import React from "react";

import { Button, buttonVariants } from "../ui/button";
import LogInButton from "../auth/LogInButton";
import { auth, signOut } from "@/auth";

export default async function Navbar() {
  const session = await auth();
  return (
    <React.Fragment>
      <nav className="navbar bg-base-100 flex mt-2 p-2">
        <section className="flex-1">
          <h1>
            Quill<span className="text-blue-500">Kalam</span>
          </h1>
        </section>

        {!session ? (
          <section className="flex items-center gap-4">
            <LogInButton>
              <Button className={buttonVariants()}>Log In</Button>
            </LogInButton>

            <Button className={buttonVariants({ variant: "secondary" })}>
              Sign Up
            </Button>
          </section>
        ) : (
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
          >
            <Button>Sign Out</Button>
          </form>
        )}
      </nav>
    </React.Fragment>
  );
}
