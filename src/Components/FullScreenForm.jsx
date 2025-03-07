import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FullScreenForm = ({ closeForm }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "COD",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);

    setTimeout(() => {
      setOrderPlaced(false);
      closeForm();
    }, 3000);
  };

  return (
    <div className="fullscreen-form">
      <AnimatePresence>
        {orderPlaced ? (
          <motion.div
            className="order-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="order-message"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              🎉 Order Placed Successfully! 🚀 <br />
              Thank you for shopping with us. 😊
            </motion.div>
          </motion.div>
        ) : (
          <motion.form
            className="order-form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleConfirmOrder}
          >
            <h2>Enter Your Details</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option value="COD">Cash on Delivery</option>
              <option value="Card">Credit/Debit Card</option>
              <option value="UPI">UPI</option>
            </select>

            <button type="submit" className="btn-confirm-order">
              Confirm Order
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FullScreenForm;
