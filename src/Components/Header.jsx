import { IoPersonSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <span className="shopping-text">Shopping</span>
        </Link>
      </div>

      <nav className="nav_bar">
        <Link to="/men" className="effect">
          Men
        </Link>
        <Link to="/women" className="effect">
          Women
        </Link>
        <Link to="/kids" className="effect">
          Kids
        </Link>
        <Link to="/home-living" className="effect">
          Home & Living
        </Link>
        <Link to="/beauty" className="effect">
          Beauty
        </Link>
        <Link to="/offer" className="effect">
          Offer <sup>New</sup>
        </Link>
      </nav>

      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">
          <IoIosSearch />
        </span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>

      <div className="action_bar">
        <div className="action_container effect">
          <h5>
            <IoPersonSharp />
          </h5>
          <ProfileMenu />
        </div>

        <div className="action_container effect">
          <h5>
            <IoHeartOutline />
          </h5>
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container effect" to="/bag">
          <h5>
            <FaShoppingBag />
          </h5>
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
