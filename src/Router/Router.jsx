import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonateDetails from "../Pages/DonateDetails/DonateDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: ()=> fetch('/all-campaign-data.json')
            },
            {
                path: 'donate_details/:id',
                element: <DonateDetails></DonateDetails>
            }
        ]
    }
])

export default myRouter;