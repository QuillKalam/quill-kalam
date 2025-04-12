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
      <section className="flex justify-between">
        <Carousel
          className="@container/carousel w-[calc(100%-3rem)]"
          setApi={setApi}
        >
          <CarouselContent>
            {trendingBooks.map((book, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/7 xl:1/8"
              >
                <TrendingBook book={book} key={book.position} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <section className="flex  flex-col  gap-2 ">
          <Button
            onClick={() => api?.scrollTo(current - 1)}
            className="w-full grow"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={() => api?.scrollTo(current + 1)}
            className="w-full grow"
          >
            <ChevronRight />
          </Button>
        </section>
      </section>
    </React.Fragment>
  );
}
