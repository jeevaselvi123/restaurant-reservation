import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

export default function SearchSidebar({
  locations,
  cusines,
  searchParams,
}: {
  locations: Location[];
  cusines: Cuisine[];
  searchParams: { city?: string; cusine?: string; price?: PRICE };
}) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      className: "border w-full text-reg text-center rounded-l p-2",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      className: "border-r border-t border-b w-full text-reg text-center p-2",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className:
        "border-r border-t border-b w-full text-reg text-center p-2 rounded-r",
    },
  ];
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, city: location.name },
            }}
            key={location.id}
            className="capitalize font-light text-reg"
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cusines.map((cusine) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, cusine: cusine.name },
            }}
            key={cusine.id}
            className="capitalize font-light text-reg"
          >
            {cusine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map(({ price, label, className }) => (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, price: price },
              }}
              className={className}
            >
              {label}
            </Link>
          ))}

          {/* <Link className="border-r border-t border-b w-full text-reg font-light p-2">
            $$
          </Link>
          <Link className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
            $$$
          </Link> */}
        </div>
      </div>
    </div>
  );
}
