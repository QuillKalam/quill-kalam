"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import TrendingBook from "./TrendingBook";
import { ITrendingCarouselProps } from "@/types/home/TrendingCarouselProps";
import { type CarouselApi } from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function TrendingCarousel({
  trendingBooks,
}: ITrendingCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <React.Fragment>
      <section className="flex">
        <Carousel className="w-[calc(100%-3.5rem)]" setApi={setApi}>
          <CarouselContent>
            {trendingBooks.map((book, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 sm:basis-1/4 lg:basis-1/8"
              >
                <TrendingBook book={book} key={book.position} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <section className="flex items-center flex-col ml-2 gap-2">
          <Button
            onClick={() => api?.scrollTo(current - 1)}
            className="w-full h-1/2"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={() => api?.scrollTo(current + 1)}
            className="w-full h-1/2"
          >
            <ChevronRight />
          </Button>
        </section>
      </section>
    </React.Fragment>
  );
}
