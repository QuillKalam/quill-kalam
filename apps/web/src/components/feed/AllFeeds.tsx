"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaHeart, FaRegComment, FaShare } from "react-icons/fa";

type FeedItem = {
  id: number;
  user: { name: string; avatar: string };
  content: string;
  timestamp: string;
};

let globalIdCounter = 0; // Keeps incrementing globally

const mockFetchFeeds = (): Promise<FeedItem[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const items = Array.from({ length: 10 }, () => {
        const id = globalIdCounter++;
        return {
          id,
          user: {
            name: `User ${id}`,
            avatar: `https://i.pravatar.cc/150?img=${id % 70}`,
          },
          content: `This is a sample post from User ${id}. Just sharing thoughts!`,
          timestamp: new Date().toLocaleString(),
        };
      });
      resolve(items);
    }, 1000);
  });

const AllFeeds = () => {
  const [feeds, setFeeds] = useState<FeedItem[]>([]);
  // disable eslint rule for setPage, as we are using it to trigger re-renders
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMore = async () => {
    if (loading) return;
    setLoading(true);
    const newFeeds = await mockFetchFeeds();
    setFeeds((prev) => [...prev, ...newFeeds]);
    setPage((prev) => prev + 1);
    setLoading(false);
  };

  useEffect(() => {
    loadMore(); // Initial load
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    const currentRef = observerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  });

  return (
    <div className="space-y-4">
      {feeds.map((feed) => (
        <div key={feed.id} className="p-4 border rounded-md bg-white shadow-sm">
          {/* User Info */}
          <div className="flex items-center space-x-3 mb-2">
            <Image
              width={40}
              height={40}
              src={feed.user.avatar}
              alt={feed.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{feed.user.name}</p>
              <p className="text-xs text-muted-foreground">{feed.timestamp}</p>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-sm text-gray-800">{feed.content}</p>

          {/* Action Buttons */}
          <div className="flex justify-around mt-3 text-muted-foreground text-sm">
            <button className="flex items-center space-x-1 hover:text-red-500">
              <FaHeart />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500">
              <FaRegComment />
              <span>Comment</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-green-500">
              <FaShare />
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
      <div ref={observerRef} className="h-10" />
      {loading && (
        <p className="text-sm text-center text-muted-foreground">
          Loading more...
        </p>
      )}
    </div>
  );
};

export default AllFeeds;
