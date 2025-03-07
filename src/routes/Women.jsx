import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";

const Women = () => {
  const items = useSelector((store) => store.items);

  // Filter only women's items
  const womenItems = items.filter((item) => item.category === "Women");

  return (
    <main>
      <div className="items-container">
        {womenItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Women;
