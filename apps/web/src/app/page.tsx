import TrendingBooks from "@/components/home/TrendingBooks";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Card className="m-2">
        <CardContent className="">
          <TrendingBooks />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
