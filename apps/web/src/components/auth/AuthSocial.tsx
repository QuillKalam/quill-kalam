"use client";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Button } from "../ui/button";

export default function AuthSocial() {
  return (
    <div className="flex flex-row gap-2 items-center justify-center ">
      <Button className="w-full" size="lg" variant="outline" onClick={() => {}}>
        <FaGoogle />
      </Button>
      <Button className="w-full" size="lg" variant="outline" onClick={() => {}}>
        <FaFacebook />
      </Button>
    </div>
  );
}
