import { getTrendingBooks } from "@/actions/getTrendingBooks";
import React from "react";
import TrendingCarousel from "./TrendingCarousel";

export default async function TrendingBooks() {
  const trendingBooks = await getTrendingBooks();

  return (
    <React.Fragment>
      <section>
        <h1 className="text-2xl font-bold">Trending Books</h1>
        <div className="w-full border-slate-200 border-[1px] my-2"></div>
        <TrendingCarousel trendingBooks={trendingBooks} />
      </section>
    </React.Fragment>
  );
}
