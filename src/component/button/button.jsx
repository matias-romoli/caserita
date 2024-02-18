import { MdRestaurantMenu, MdMenuBook } from "react-icons/md";

function ButtonHome({ status, text }) {
  return (
    <button>
      <span>{text}</span>
      <span>
        {status ? (
          <MdRestaurantMenu className="button__icon" />
        ) : (
          <MdMenuBook className="button__icon" />
        )}
      </span>
    </button>
  );
}

export default ButtonHome;
