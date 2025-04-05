"use client";
import { AuthCardWrapperProps } from "@/types/auth/AuthCardWrapperProps";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import AuthHeader from "./AuthHeader";
import AuthSocial from "./AuthSocial";
import LogInBackButton from "./LogInBackButton";

export default function LogInCardWrapper({
  children,
  backButtonHref,
  headerLable,
  backButtonLabel,
  showSocial,
}: AuthCardWrapperProps) {
  return (
    <React.Fragment>
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <AuthHeader label={headerLable} />
        </CardHeader>

        <CardContent>{children}</CardContent>

        {showSocial && (
          <CardFooter className="flex  justify-center">
            <AuthSocial />
          </CardFooter>
        )}
        <CardFooter>
          <LogInBackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      </Card>
    </React.Fragment>
  );
}
