import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { TrendingBookProps } from "@/types/home/TrendingBookProps";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "../ui/button";
import { BookOpenText, CirclePlus } from "lucide-react";
export default function TrendingBook({
  id,
  title,
  description,
  image,
}: TrendingBookProps) {
  return (
    <React.Fragment>
      <HoverCard data-align="center">
        <HoverCardTrigger>
          <Card className=" gap-0 py-0 rounded-none border-none relative aspect-[4/5] bg-transparent shadow-none">
            <CardContent className="relative  w-full h-full px-0 group">
              <section className="relative  h-full w-10 px-3 hidden md:block">
                <span className="absolute bottom-0 text-[var(--reading-text)] font-bold">
                  {String(id).padStart(2, "0")}
                </span>
                <span className="-left-21 z-10 inline-block   absolute  -rotate-90 w-52 bottom-30 text-left  truncate">
                  {title}
                </span>
              </section>
              <section className="block md:hidden absolute bottom-0 left-0 p-2 aspect-16/9 z-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-tr-xl">
                # {String(id).padStart(2, "0")}
              </section>
              <div className="h-full inset-0 left-0 md:left-10 absolute">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="100%"
                  className="object-cover"
                  priority
                />
              </div>
            </CardContent>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent
          className="hidden md:block"
          align="end"
          side="right"
          sideOffset={-20}
        >
          <Card className=" rounded-b-md border-none shadow-none gap-3">
            <CardHeader className="px-0 py-0">
              <h1 className="text-xl">{title}</h1>
            </CardHeader>
            <CardContent className="line-clamp-5 text-sm px-0">
              {description}
            </CardContent>
            <CardFooter className="px-0">
              <section className="flex justify-between items-center w-full gap-2">
                <Button className="grow rounded-xl">
                  <p>
                    <BookOpenText className="inline mr-2" />
                    <span>Read Now</span>
                  </p>
                </Button>
                <Button>
                  <CirclePlus />
                </Button>
              </section>
            </CardFooter>
          </Card>
        </HoverCardContent>
      </HoverCard>
    </React.Fragment>
  );
}
