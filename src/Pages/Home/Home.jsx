
import { SearchValue } from "../../Layout/MainLayout";
import CampaignsCard from "../../components/CampaignsCard/CampaignsCard";
import { useContext, useEffect, useState } from "react";

const Home = () => {
    const [campaigns, setCampains] = useState([]);
    const [displayCampaigns,setDisplayCampaigns] = useState([])

    const [valueOfSearch] = useContext(SearchValue);

    useEffect(()=>{
        fetch('/all-campaign-data.json')
        .then(res => res.json())
        .then(data => setCampains(data));
        setDisplayCampaigns(campaigns)
    },[campaigns])

    useEffect(()=>{
        const searchedCategory = campaigns.filter(campaign => campaign.category?.toLowerCase() === valueOfSearch?.toLowerCase());
        if(searchedCategory.length >0){
            setDisplayCampaigns(searchedCategory)
        }else{
            setDisplayCampaigns(campaigns)
        }
    },[campaigns, valueOfSearch])


    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-24">
             {campaigns &&
                displayCampaigns.map(campaign => <CampaignsCard key={campaign.id} campaign={campaign}></CampaignsCard>)
            }
        </div>
    );
};

export default Home;