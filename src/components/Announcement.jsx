import React from "react";
import { useState } from "react";
import StripeFormHome from "../components/stripeFormHome";

const Announcement = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <>
      {isPopupOpen && <StripeFormHome onClose={closePopup} />}
      <div className="announcement-bar">
        <p>
          🚀 Start your Website in just <strong>$499</strong>
          <button className="redeem-btn" onClick={openPopup}>
            Click to Redeem
          </button>
        </p>
      </div>
    </>
  );
};

export default Announcement;
