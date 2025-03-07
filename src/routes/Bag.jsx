import { useEffect } from "react";
import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.length > 0 ? (
              finalItems.map((item) => <BagItem key={item.id} item={item} />)
            ) : (
              <h4 className="bagItem">
                Your bag is empty.Start adding your favorite items!
              </h4>
            )}
          </div>
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
};
export default Bag;
