"use Client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import TrendingBook from "./TrendingBook";
import { ITrendingCarouselProps } from "@/types/home/TrendingCarouselProps";
export default function TrendingCarousel({
  trendingBooks,
}: ITrendingCarouselProps) {
  return (
    <React.Fragment>
      <Carousel className="w-full ">
        <CarouselContent>
          {trendingBooks.map((book, index) => (
            <CarouselItem
              key={index}
              className=" basis-auto w-[120px] md:w-[160px] lg:w-[200px]"
            >
              <TrendingBook book={book} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </React.Fragment>
  );
}
