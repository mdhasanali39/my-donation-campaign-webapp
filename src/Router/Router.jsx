import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        // errorElement: do error handling  
        
    }
])

export default myRouter;