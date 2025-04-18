import AllFeeds from "@/components/feed/AllFeeds";
import { Card } from "@/components/ui/card";
import React from "react";

export default function FeedPage() {
  return (
    <React.Fragment>
      <main className="flex flex-row justify-center gap-4 p-6">
        {/* Left Sidebar */}
        <Card className="w-[300px] hidden lg:block p-4">
          <h2 className="font-bold text-lg mb-2">Navigation</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>🏠 ADD Thoughts</li>
            <li>🔔 Review a book</li>
            <li>📩 Messages</li>
            <li>👤 Profile</li>
          </ul>
        </Card>

        {/* Center Feed */}
        <Card className="w-full p-4 overflow-y-auto max-h-[85vh]">
          <h1 className="text-2xl font-bold mb-4">All Feeds</h1>
          <AllFeeds />
        </Card>

        {/* Right Sidebar */}
        <Card className="w-[400] hidden xl:block p-4">
          <h2 className="font-bold text-lg mb-2">Trends</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>#books</li>
            <li>#LoveThisNewBook</li>
            <li>#HolyShitMomemt</li>
            <li>#StupidAuthor</li>
          </ul>
        </Card>
      </main>
    </React.Fragment>
  );
}
