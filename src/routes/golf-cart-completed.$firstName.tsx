import { createFileRoute, Link } from "@tanstack/react-router";
import { ErrorComponent } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { data } from "autoprefixer";
import { useState } from "react";

export const Route = createFileRoute("/golf-cart-completed/$firstName")({
  loader: ({ params: { firstName } }) => firstName,
  component: PostComponent,
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const firstName = Route.useLoaderData();
  return (
    <div className="max-w-md mx-auto p-6 bg-white/10 rounded-lg backdrop-blur-lg mt-8">
      <h1 className="text-center text-gray-200 text-4xl font-bold mt-4">
        Enjoy your round {firstName}!
      </h1>
      <div className="text-center text-green-100 text-8xl font-bold mt-4">
        ⛳
      </div>
    </div>
  );
}
