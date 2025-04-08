"use server";

import trendingBooks from "@/samples/trendingBooks";

export const getTrendingBooks = async (length = 15) => {
  return trendingBooks.slice(0, length);
};
