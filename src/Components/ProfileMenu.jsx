import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="profile-menu-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="action_name">Profile</span>

      {isOpen && (
        <div className="profile-dropdown">
          <Link to="/profile">Login</Link>
          <Link to="/profile">Sign Up</Link>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
