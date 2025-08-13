import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const usedCarts = [4, 6];

function Home() {
  return (
    <div className="p-2 [view-transition-name:main-content] bg-cover bg-center h-full">
      <div className="flex flex-col items-center justify-center">
        <h3>Welcome To Sandgate Golf Club</h3>
        <h3>Select a cart to reserve</h3>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-10 mt-4 max-w-3xl m-auto max-h-xl h-full">
        {[...Array(10)].map((_, i) => (
          <Link
            to="/golf-cart/$cartNumber"
            params={{ cartNumber: (i + 1).toString() }}
            viewTransition={{ types: ["slide-right"] }}
            disabled={usedCarts.includes(i + 1)}
          >
            <div className="relative">
              {usedCarts.includes(i + 1) && (
                <div className="absolute top-1/2 left-0 w-full bg-red-500 text-white text-center py-1 z-10">
                  In Use
                </div>
              )}
              <div
                key={i}
                className={`flex flex-col items-center justify-center bg-white/80 rounded-lg shadow-lg hover:bg-gray-100 p-4 backdrop-blur-lg group relative ${
                  usedCarts.includes(i + 1)
                    ? "opacity-50 cursor-not-allowed pointer-events-none"
                    : "opacity-100 cursor-pointer"
                }`}
              >
                <img
                  src="/golf-cart.png"
                  alt={`Golf cart ${i + 1}`}
                  className="w-24 h-24 object-contain group-hover:scale-125 transition-all duration-300"
                />
                <span className="text-6xl font-bold mt-2 text-black">
                  {i + 1}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
