import {
  PieChart,
  Pie,
  Legend,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const Statistics = () => {
  
  const campaigns = useLoaderData();
  // const [donated, setDonated] = useState([]);
  const [totalDonationCampaigns, setTotalDonationCampaigns] = useState(0);
  const [totaldonatedCampaigns, setTotaldonatedCampaigns] = useState(0);

  useEffect(() => {
    const donatedCampaigns =
      JSON.parse(localStorage.getItem("donated_Campaign")) || [];
      // setDonated(donatedCampaigns)

    setTotalDonationCampaigns(
      Math.abs(
        (100 / campaigns.length) * campaigns.length - totaldonatedCampaigns
      )
    );

    setTotaldonatedCampaigns(
      Math.abs((100 / campaigns.length) * donatedCampaigns.length)
    );
  }, [campaigns.length, totaldonatedCampaigns]);



  const data = [
    { name: "total donation", students: totalDonationCampaigns },
    { name: "donated total", students: totaldonatedCampaigns },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="font-bold text-lg"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <>
      <div>
        <div className="flex justify-center text-center">
            <ResponsiveContainer
              width={400}
              height={400}
              className="text-center"
            >
              <PieChart width={400} height={400}>
                <Legend layout="horizontal" verticalAlign="bottom" align="bottom" />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="students"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

// const PieChartComponent = () => {


  
// };
// export { PieChartComponent };

export default Statistics;
