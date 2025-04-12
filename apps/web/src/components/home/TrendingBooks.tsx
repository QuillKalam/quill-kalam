import { getTrendingBooks } from "@/actions/getTrendingBooks";
import React from "react";
import { Button } from "../ui/button";
import TrendingCarousel from "./TrendingCarousel";

export default async function TrendingBooks() {
  const trendingBooks = await getTrendingBooks();

  return (
    <React.Fragment>
      <section className="max-w-screen-2xl  space-y-1">
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl font-bold">Trending Books</h1>
          <section className="flex items-center space-x-2">
            <Button size="icon" variant="outline">
              {"<"}
            </Button>
            <Button size="icon" variant="outline">
              {">"}
            </Button>
          </section>
        </div>
        <div className="w-full border-slate-200 border-[1px] my-2"></div>
        <TrendingCarousel trendingBooks={trendingBooks} />
      </section>
    </React.Fragment>
  );
}
