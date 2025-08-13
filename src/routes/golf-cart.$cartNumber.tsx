import { createFileRoute, Link } from "@tanstack/react-router";
import { ErrorComponent } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/golf-cart/$cartNumber")({
  loader: ({ params: { cartNumber } }) => cartNumber,
  component: PostComponent,
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const cartNumber = Route.useLoaderData();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    license: "",
  });

  return (
    <div className="space-y-4 max-w-md mx-auto p-6 bg-white/80 rounded-lg backdrop-blur-lg mt-8">
      <h4 className="text-2xl font-bold text-center text-gray-700">
        Golf Cart Reservation
      </h4>
      <h5 className="text-center text-gray-700">Cart {cartNumber}</h5>
      <form className="space-y-4">
        <div className="grid grid-cols-3 gap-4 items-center">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 text-right"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white text-gray-700 px-4 py-2 col-span-2"
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 items-center">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 text-right"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white text-gray-700 px-4 py-2 col-span-2"
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 items-center">
          <label
            htmlFor="license"
            className="block text-sm font-medium text-gray-700 text-right"
          >
            License Number
          </label>
          <input
            type="text"
            id="license"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white text-gray-700 px-4 py-2 col-span-2"
            value={data.license}
            onChange={(e) => setData({ ...data, license: e.target.value })}
          />
        </div>

        <div className="mt-4">
          <h5 className="text-lg font-semibold mb-3">Select Tee Time</h5>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => {
              const hour = i + 7;
              const time = `${hour === 12 ? 12 : hour % 12}:00 ${hour < 12 ? "AM" : "PM"}`;
              return (
                <Link
                  to="/golf-cart-completed/$firstName"
                  params={{ firstName: data.firstName }}
                  key={i}
                  type="button"
                  className={`py-2 px-4 text-white text-center rounded transition-colors ${
                    data.firstName === "" ||
                    data.lastName === "" ||
                    data.license === ""
                      ? "bg-green-600/80 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 cursor-pointer"
                  }`}
                  viewTransition={{ types: ["slide-right"] }}
                  disabled={
                    data.firstName === "" ||
                    data.lastName === "" ||
                    data.license === ""
                  }
                >
                  {time}
                </Link>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
}
