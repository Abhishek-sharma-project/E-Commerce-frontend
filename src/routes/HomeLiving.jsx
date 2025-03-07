import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";

const Men = () => {
  const items = useSelector((store) => store.items);

  const homeLivingItems = items.filter(
    (item) => item.category === "HomeLiving"
  );

  return (
    <main>
      <div className="items-container">
        {homeLivingItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Men;
