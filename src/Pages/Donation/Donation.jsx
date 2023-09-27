import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard/DonatedCard";
import { Link } from "react-router-dom";

const Donation = () => {
  const [donatedCampaigns, setDonatedCampains] = useState([]);
  const [displayCampaigns, setDisplayCampaigns] = useState([]);
  const [length, setLength] = useState(4);
  const [isActive, setIsAcitve] = useState(false);

  useEffect(() => {
    const storedCampaign =
      JSON.parse(localStorage.getItem("donated_Campaign")) || [];
    setDonatedCampains(storedCampaign);
  }, []);

  useEffect(() => {
    setDisplayCampaigns(donatedCampaigns.slice(0, length));
  }, [donatedCampaigns, length]);

  //   handle see all button clicked
  const handleSeeAllButtonClicked = () => {
    setLength(donatedCampaigns.length);
    setIsAcitve(true);
  };
  return (
    <div className="my-16">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
        {displayCampaigns?.map((campaign) => (
          <DonatedCard key={campaign.id} campaign={campaign}></DonatedCard>
        ))}
      </div>
      <div className="flex justify-center">
        {donatedCampaigns.length > 4 && (
          <button
            onClick={handleSeeAllButtonClicked}
            className={`bg-[#009444] px-6 py-3 ${
              isActive === false ? "block" : "hidden"
            } rounded-lg font-semibold text-white`}
          >
            See All
          </button>
        )}
      </div>
      {/* if not donated  */}
      {donatedCampaigns.length === 0 && <div className="flex flex-col justify-center items-center min-h-[50vh]">
        <h2 className="text-2xl font-semibold">You do not have donated yet</h2>
        <Link to={"/"}>
          <button className="px-5 py-3 bg-gray-700 rounded-lg text-white font-semibold mt-5">
            Go Home
          </button>
        </Link>
      </div>}
    </div>
  );
};

export default Donation;
