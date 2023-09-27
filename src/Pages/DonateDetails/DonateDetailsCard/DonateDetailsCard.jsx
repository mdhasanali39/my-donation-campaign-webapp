import PropTypes from "prop-types";
import swal from 'sweetalert';

const DonateDetailsCard = ({ selectedCampaign, campaigns}) => {
  const {
    id,
    images,
    title,
    price,
    category,
    text_color_button_bg,
    description
  } = selectedCampaign || {};

  const {1:image2, 2:image3} = images || {}


  // handle donate button clicked 
  const handleDonateButtonClicked = () =>{
    const storedCampaign = JSON.parse(localStorage.getItem('donated_Campaign')) || [];

    if(storedCampaign.find(campaign => campaign.id == id)){
      swal({
        title: "Error",
        text: "Already Added",
        icon: "error",
        button: "close",
      });
    }else{
      storedCampaign.push(selectedCampaign)
      localStorage.setItem('donated_Campaign', JSON.stringify(storedCampaign))
      swal({
        title: "Success",
        text: "You Donated Successfully",
        icon: "success",
        button: "close",
      });
    }
  }

  return (
    <div
      className={`relative w-11/12 flex flex-col rounded-lg bg-clip-border text-gray-700`}
    >
      <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
        <img 
        className="rounded-lg w-full h-[500px] max-[639px]:object-cover sm:object-fill"
        src={category === 'Education' ? image3 : image2} alt={title} />
        <button 
        onClick={handleDonateButtonClicked}
        style={{backgroundColor: `${text_color_button_bg}`}}
        className="px-5 py-4 rounded-[4px] text-white text-xl font-semibold absolute left-[27px] bottom-[27px]"
        >Donate ${price}</button>
      </div>
      <div className="p-3 md:p-6">
        <h4
          className="block font-sans text-[40px] text-black mt-2 font-semibold leading-snug tracking-normal antialiased mb-5"
        >
          {title}
        </h4>
        <p
        className="text=[#0B0B0BB2] text-justify md:text-left" 
        >{description}</p>
      </div>
    </div>
  );
};
DonateDetailsCard.propTypes = {
  selectedCampaign: PropTypes.object.isRequired,
  campaigns: PropTypes.array.isRequired,
}
export default DonateDetailsCard;
