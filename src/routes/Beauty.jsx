import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";

const Men = () => {
  const items = useSelector((store) => store.items);

  const beautyItems = items.filter((item) => item.category === "Beauty");

  return (
    <main>
      <div className="items-container">
        {beautyItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Men;
