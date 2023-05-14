import { PrismaClient } from "@prisma/client";
import { error } from "console";
import MenuCard from "../../../../components/MenuCard";
import RestaurantNavBar from "../../../../components/RestaurantNavBar";
import RestaurantHeader from "../../../../components/ResturantHeader";

const prisma = new PrismaClient();

const fetchItemsByRestaurant = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
      name: true,
    },
  });

  if (!restaurant) throw error("Cannot find the restaurant");

  return restaurant;
};

export default async function RestaurantMenu({
  params,
}: {
  params: { slug: string };
}) {
  const restaurantMenu = await fetchItemsByRestaurant(params.slug);
  return (
    <>
      {/* HEADER */}
      <RestaurantHeader restaurantName={params.slug} />
      {/* HEADER */} {/* DESCRIPTION PORTION */}
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          {/* RESAURANT NAVBAR */}
          <RestaurantNavBar slug={params.slug} />
          {/* RESAURANT NAVBAR */} {/* MENU */}
          <main className="bg-white mt-5">
            <div>
              <div className="mt-4 pb-1 mb-1">
                <h1 className="font-bold text-4xl">Menu</h1>
              </div>
              {restaurantMenu.items.length > 0 ? (
                <div className="flex flex-wrap justify-between">
                  {/* MENU CARD */}
                  {restaurantMenu.items.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                  {/* MENU CARD */}
                </div>
              ) : (
                <div className="flex flex-wrap justify-between">
                  {/* MENU CARD */}
                  <p>This restaurant does not have a menu</p>
                  {/* MENU CARD */}
                </div>
              )}
            </div>
          </main>
          {/* MENU */}
        </div>
      </div>
      {/* DESCRIPTION PORTION */}
    </>
  );
}
