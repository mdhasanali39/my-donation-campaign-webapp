import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard/DonatedCard";

const Donation = () => {
  const [donatedCampaigns, setDonatedCampains] = useState([]);
  const [length, setLength] = useState(4);
  const [isActive, setIsAcitve] = useState(false)

  console.log(length);
  useEffect(() => {
    const storedCampaign =
      JSON.parse(localStorage.getItem("donated_Campaign")) || [];
    setDonatedCampains(storedCampaign);
  }, []);

  //   handle see all button clicked
  const handleSeeAllButtonClicked = () => {
    setLength(donatedCampaigns.length);
    setIsAcitve(true)
  };
  return (
    <div className="my-16">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
        {donatedCampaigns &&
          donatedCampaigns.length > 4 &&
          donatedCampaigns
            .slice(0, length)
            .map((campaign) => (
              <DonatedCard key={campaign.id} campaign={campaign}></DonatedCard>
            ))}
      </div>
      <div className="flex justify-center">

            <button
            onClick={handleSeeAllButtonClicked}
            className={`bg-[#009444] px-6 py-3 ${isActive === false ? 'block' : 'hidden' } rounded-lg font-semibold text-white`}
          >
            See All
          </button>

      </div>
    </div>
  );
};

export default Donation;
