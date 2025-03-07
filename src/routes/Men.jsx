import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";

const Men = () => {
  const items = useSelector((store) => store.items);

  const menItems = items.filter((item) => item.category === "Men");

  return (
    <main>
      <div className="items-container">
        {menItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Men;
