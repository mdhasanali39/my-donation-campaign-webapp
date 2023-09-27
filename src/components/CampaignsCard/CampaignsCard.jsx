import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CampaignsCard = ({ campaign }) => {
  const navigate = useNavigate();

  const {
    id,
    images,
    title,
    category,
    color_of_category_bg,
    color_of_card_bg,
    text_color_button_bg,
  } = campaign || {};

  //   const customStyle = {
  //     backgroundColor : color_of_card_bg,
  //     color: text_color_button_bg
  //   }

  // handle card clicked
  const handleCardClicked = () => {
    navigate(`/donate_details/${id}`);
    console.log("ok");
  };

  return (
    <div
      onClick={handleCardClicked}
      style={{ backgroundColor: `${color_of_card_bg}` }}
      className={`relative flex max-w-[24rem] flex-col rounded-lg bg-clip-border text-gray-700`}
    >
      <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
        <img
        className="w-full"
         src={images[0]}
          alt={title} />
      </div>
      <div className="p-6">
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
        <h4
          style={{ color: `${text_color_button_bg}` }}
          className="block font-sans text-xl mt-2 font-semibold leading-snug tracking-normal antialiased"
        >
          {title}
        </h4>
      </div>
    </div>
  );
};
CampaignsCard.propTypes = {
  campaign: PropTypes.object.isRequired,
};
export default CampaignsCard;
