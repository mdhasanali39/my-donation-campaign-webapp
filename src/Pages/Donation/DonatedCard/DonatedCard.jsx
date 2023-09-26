import { Link } from "react-router-dom";

const DonatedCard = ({ campaign }) => {
  const {
    id,
    images,
    title,
    price,
    category,
    color_of_category_bg,
    color_of_card_bg,
    text_color_button_bg,
  } = campaign || {};
  return (
    <div
      style={{ backgroundColor: `${color_of_card_bg}` }}
      className={`relative flex  rounded-lg bg-clip-border text-gray-700`}
    >
      <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
        <img className="h-full" src={images[1]} alt={title} />
      </div>
      <div className="p-6">
        {/* category  */}
        <div
          style={{ backgroundColor: `${color_of_category_bg}` }}
          className="w-min px-2 rounded-[4px]"
        >
          <p
            style={{ color: `${text_color_button_bg}` }}
            className="text-sm font-medium"
          >
            {category}
          </p>
        </div>
        <h4 className="block font-sans text-2xl text-black mt-2 font-semibold leading-snug tracking-normal antialiased mb-1">
          {title}
        </h4>
        <p
          style={{ color: `${text_color_button_bg}` }}
          className="font-semibold"
        >
          ${price}
        </p>
        <Link to={`/donate_details/${id}`}>
          <button
            style={{ backgroundColor: `${text_color_button_bg}` }}
            className="px-4 py-2 mt-6 rounded-[4px] text-white text-xl font-semibold"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonatedCard;
