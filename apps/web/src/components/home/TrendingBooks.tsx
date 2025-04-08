import { getTrendingBooks } from "@/actions/getTrendingBooks";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import TrendingBook from "./TrendingBook";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default async function TrendingBooks() {
  const trendingBooks = await getTrendingBooks();

  return (
    <React.Fragment>
      <section className="bg-[var(--reading-bg)] py-8">
        <section className="max-w-screen-2xl mx-auto space-y-1 px-4">
          <div className="flex justify-between items-center ">
            <h1 className="text-2xl font-bold">Trending Books</h1>
            <section className="flex items-center space-x-2">
              <ChevronLeft />
              <ChevronRight />
            </section>
          </div>
          <div className="w-full border-slate-200 border-[1px] my-2"></div>
          <Carousel className="w-full">
            <CarouselContent>
              {trendingBooks.map((book, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 sm:basis-1/5 lg:basis-1/7"
                >
                  <TrendingBook book={book} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </section>
    </React.Fragment>
  );
}
