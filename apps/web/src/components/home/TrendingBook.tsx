import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
export default function TrendingBook({
  book,
}: {
  book: { image: string; title: string };
}) {
  return (
    <React.Fragment>
      <div className="py-1 relative w-full inline-block">
        <Card className="gap-0 py-0 rounded-none border-none ">
          <CardContent className="relative px-0 ">
            <Image
              src={book.image}
              alt={book.title}
              height={1000}
              width={1000}
              className="object-cover  aspect-3/4"
            />
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
}
