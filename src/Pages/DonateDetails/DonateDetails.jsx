import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DonateDetailsCard from "./DonateDetailsCard/DonateDetailsCard";

const DonateDetails = () => {
  const [selectedCampaign, setSelectedCampaign] = useState({});
  const [campaigns, setCampains] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/all-campaign-data.json");
        const data = await res.json();
        setCampains(data);
        const selected = data?.find((campaign) => campaign.id + "" === id);
        setSelectedCampaign(selected)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="flex justify-center items-center mt-20 min-h-[70vh]">
      {
        <DonateDetailsCard selectedCampaign={selectedCampaign} campaigns={campaigns}></DonateDetailsCard>
      }
    </div>
  );
};

export default DonateDetails;
