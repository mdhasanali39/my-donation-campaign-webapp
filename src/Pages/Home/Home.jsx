import CampaignsCard from "../../components/CampaignsCard/CampaignsCard";
import { useEffect, useState } from "react";

const Home = () => {
    const [campaigns, setCampains] = useState([]);

    useEffect(()=>{
        fetch('all-campaign-data.json')
        .then(res => res.json())
        .then(data => setCampains(data));
    },[])


    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-24">
             {campaigns &&
                campaigns.map(campaign => <CampaignsCard key={campaign.id} campaign={campaign}></CampaignsCard>)
            }
        </div>
    );
};

export default Home;