import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { ITrendingBookProps } from "@/types/home/TrendingBookProps";
export default function TrendingBook({ book }: ITrendingBookProps) {
  return (
    <React.Fragment>
      <Card className="gap-0 py-0 rounded-none border-none relative aspect-[4/5] bg-transparent shadow-none">
        <CardContent className="relative  w-full h-full px-0 group">
          <section className="relative  h-full w-10 px-3 hidden md:block">
            <span className="absolute bottom-0 text-[var(--reading-text)] font-bold">
              {String(book.position).padStart(2, "0")}
            </span>
            <span className="-left-21 z-10 inline-block   absolute  -rotate-90 w-52 bottom-30 text-left  truncate">
              {book.title}
            </span>
          </section>
          <section className="block md:hidden absolute top-0 left-0 p-1 aspect-square z-10 bg-red-500">
            # {String(book.position).padStart(2, "0")}
          </section>
          <Link href="/" className="h-full inset-0 left-0 md:left-10 absolute">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-cover"
            />
          </Link>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
