import NavBar from "../../components/NavBar";
import SearchHeader from "../../components/SearchHeader";
import SearchRestaurantCard from "../../components/SearchRestaurantCard";
import SearchSidebar from "../../components/SearchSidebar";

export default function Search() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <NavBar />
        {/* HEADER */}
        <SearchHeader />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* SEARCH SIDE BAR */}
          <SearchSidebar />
          {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESAURANT CAR */}
            <SearchRestaurantCard />
            {/* RESAURANT CAR */}
          </div>
        </div>
      </main>
    </main>
  );
}
