import { TrendingBookProps } from "./TrendingBookProps";

export interface TrendingCarouselProps {
  trendingBooks: Pick<
    TrendingBookProps,
    "image" | "title" | "id" | "description"
  >[];
}
