import TrendingBooks from "@/components/home/TrendingBooks";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Card className="m-2">
        <CardContent>
          <h1 className="text-2xl font-bold">Welcome to QuillKalam</h1>
          <p className="text-sm text-muted-foreground">
            Your one-stop solution for all your book needs.
          </p>
        </CardContent>
      </Card>
      <section className="flex flex-row">
        <Card className="m-2 flex-3">
          <CardContent>
            <TrendingBooks />
          </CardContent>
        </Card>
        <Card className="m-2 flex-2">
          <CardContent>
            Yet To be decided
            {/* <h2 className="text-xl font-bold mb-2">Feeds</h2>
            <Feeds /> */}
          </CardContent>
        </Card>
      </section>
    </React.Fragment>
  );
}
