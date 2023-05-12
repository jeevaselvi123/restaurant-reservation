interface Props {
  restaurantName: string;
}

export default function RestaurantHeader({ restaurantName }: Props) {
  const renderTitle = () => {
    const nameArray = restaurantName.split("-");
    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;
    return nameArray.join(" ");
  };
  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className=" capitalize text-7xl text-white text-shadow text-center">
          {renderTitle()}
        </h1>
      </div>
    </div>
  );
}
