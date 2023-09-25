import { useParams } from "react-router-dom";

const DonateDetails = () => {
    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <h2>DonateDetails</h2>
        </div>
    );
};

export default DonateDetails;