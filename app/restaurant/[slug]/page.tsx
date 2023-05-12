import { PrismaClient } from "@prisma/client";
import RestaurantNavBar from "../../../components/RestaurantNavBar";
import RestaurantHeader from "../../../components/ResturantHeader";
import ReviewCard from "../../../components/ReviewCard";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) {
    throw Error;
  }
  return restaurant;
};

export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  //console.log({ restaurant });
  return (
    <>
      <RestaurantHeader restaurantName={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar slug={restaurant.slug} />
          {/* TITLE */}
          <div className="mt-4 border-b pb-6">
            <h1 className="font-bold text-6xl">{restaurant.name}</h1>
          </div>
          {/* TITLE */} {/* RATING */}
          <div className="flex items-end">
            <div className="ratings mt-2 flex items-center">
              <p>*****</p>
              <p className="text-reg ml-3">4.9</p>
            </div>
            <div>
              <p className="text-reg ml-4">600 Reviews</p>
            </div>
          </div>
          {/* RATING */} {/* DESCRIPTION */}
          <div className="mt-4">
            <p className="text-lg font-light">{restaurant.description}</p>
          </div>
          {/* DESCRIPTION */} {/* IMAGES */}
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
              {restaurant.images.length} photo
              {restaurant.images.length > 1 ? "s" : ""}
            </h1>
            <div className="flex flex-wrap">
              {restaurant.images.map((image) => (
                <img className="w-56 h-44 mr-1 mb-1" src={image} alt="" />
              ))}
            </div>
          </div>
          {/* IMAGES */} {/* REVIEWS */}
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
              What 100 people are saying
            </h1>
            <div>
              {/* REVIEW CARD */}
              <ReviewCard />
              {/* REVIEW CARD */}
            </div>
          </div>
          {/* REVIEWS */}
        </div>
        <div className="w-[27%] relative text-reg">
          <div className="fixed w-[15%] bg-white rounded p-3 shadow">
            <div className="text-center border-b pb-2 font-bold">
              <h4 className="mr-7 text-lg">Make a Reservation</h4>
            </div>
            <div className="my-3 flex flex-col">
              <label htmlFor="">Party size</label>
              <select name="" className="py-3 border-b font-light" id="">
                <option value="">1 person</option>
                <option value="">2 people</option>
              </select>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-[48%]">
                <label htmlFor="">Date</label>
                <input type="text" className="py-3 border-b font-light w-28" />
              </div>
              <div className="flex flex-col w-[48%]">
                <label htmlFor="">Time</label>
                <select name="" id="" className="py-3 border-b font-light">
                  <option value="">7:30 AM</option>
                  <option value="">9:30 AM</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                Find a Time
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{" "}
      {/* RESERVATION
      CARD PORTION */}
    </>
  );
}
