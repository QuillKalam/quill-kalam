"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import TrendingBook from "./TrendingBook";
import { TrendingCarouselProps } from "@/types/home/TrendingCarouselProps";
import { type CarouselApi } from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TrendingCarousel({
  trendingBooks,
}: TrendingCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  // in future implementaion this will be used to show the current slide
  // remove the eslint rule when using it
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (api) setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const handlePrevious = useCallback(() => api?.scrollPrev(), [api]);
  const handleNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <React.Fragment>
      <section className="flex justify-between">
        <Carousel
          className="@container/carousel w-[calc(100%-3rem)]"
          setApi={setApi}
        >
          <CarouselContent>
            {trendingBooks.map((book) => (
              <CarouselItem
                key={book.id ?? Math.random()}
                className="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/7 xl:basis-1/8"
              >
                <TrendingBook
                  id={book.id}
                  title={book.title}
                  image={book.image}
                  description={book.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={handlePrevious}
            className="w-full grow"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            onClick={handleNext}
            className="w-full grow"
            aria-label="Next slide"
          >
            <ChevronRight />
          </Button>
        </div>
      </section>
    </React.Fragment>
  );
}
