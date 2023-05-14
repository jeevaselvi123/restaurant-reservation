import { PRICE, PrismaClient } from "@prisma/client";
import SearchBar from "../../components/SearchBar";
import SearchRestaurantCard from "../../components/SearchRestaurantCard";
import SearchSidebar from "../../components/SearchSidebar";

const prisma = new PrismaClient();

interface SearchParams {
  city?: string;
  cusine?: string;
  price?: PRICE;
}

const fetchReastaurantBySearchTerm = (searchParams: SearchParams) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city,
      },
    };
    where.location = location;
  }
  if (searchParams.cusine) {
    const cusine = {
      name: {
        equals: searchParams.cusine,
      },
    };
    where.cusine = cusine;
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    slug: true,
    price: true,
    cusine: true,
    location: true,
    reviews: true
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocation = () => {
  return prisma.location.findMany();
};

const fetchCusine = () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchRestaurants = await fetchReastaurantBySearchTerm(searchParams);

  const location = await fetchLocation();
  const cusine = await fetchCusine();

  return (
    <>
      {/* HEADER */}
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBar />
      </div>

      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}

        {searchRestaurants.length ? (
          <>
            <SearchSidebar
              locations={location}
              cusines={cusine}
              searchParams={searchParams}
            />
            {/* SEARCH SIDE BAR */}
            <div className=" w-5/6">
              {/* RESAURANT CAR */}

              {searchRestaurants.map((item) => (
                <SearchRestaurantCard item={item} key={item.id} />
              ))}

              {/* RESAURANT CAR */}
            </div>
          </>
        ) : (
          <p>Sorry, we don't found any restaurant in the given area</p>
        )}
      </div>
    </>
  );
}
