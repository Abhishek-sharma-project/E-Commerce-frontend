import { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import FullScreenForm from "./FullScreenForm";

const BagSummary = () => {
  const bagItemIds = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const [showForm, setShowForm] = useState(false);
  const [emptyBagMessage, setEmptyBagMessage] = useState(false);

  const finalItems = items.filter((item) => bagItemIds.includes(item.id));

  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  const CONVENIENCE_FEES = totalMRP > 0 ? 99 : 0;
  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  const handlePlaceOrder = () => {
    if (totalItem === 0) {
      setEmptyBagMessage(true);
      setTimeout(() => setEmptyBagMessage(false), 3000);

      return;
    }
    setShowForm(true);
  };

  return (
    <div className="bag-summary">
      {showForm ? (
        <FullScreenForm closeForm={() => setShowForm(false)} />
      ) : (
        <>
          <div className="bag-details-container">
            <div className="price-header">
              <h6>PRICE DETAILS ({totalItem} Items)</h6>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Total MRP</span>
              <span className="price-item-value">₹{totalMRP}</span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Discount on MRP</span>
              <span className="price-item-value priceDetail-base-discount">
                -₹{totalDiscount}
              </span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Convenience Fee</span>
              <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
            </div>
            <hr />
            <div className="price-footer">
              <span className="price-item-tag">Total Amount</span>
              <span className="price-item-value">₹{finalPayment}</span>
            </div>
          </div>

          <button className="btn-place-order" onClick={handlePlaceOrder}>
            <div className="css-xjhrni">PLACE ORDER</div>
          </button>
          <AnimatePresence>
            {emptyBagMessage && (
              <motion.div
                className="empty-bag-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                ⚠️ Your bag is empty. Add items before placing an order!
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default BagSummary;
