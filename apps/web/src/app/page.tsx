import Header from "@/components/home/Header";
import TrendingBooks from "@/components/home/TrendingBooks";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <main>
        <Header />
        <TrendingBooks />
      </main>
    </React.Fragment>
  );
}
