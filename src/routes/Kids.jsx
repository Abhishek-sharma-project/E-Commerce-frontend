import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";

const Women = () => {
  const items = useSelector((store) => store.items);

  // Filter only women's items
  const kidsItems = items.filter((item) => item.category === "Kids");

  return (
    <main>
      <div className="items-container">
        {kidsItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Women;
