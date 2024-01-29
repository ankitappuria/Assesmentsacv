import {
    createBrowserRouter,
} from "react-router-dom";

import CarModelComponent from '../components/carModel/CarModelComponent';
import CarFilterComponent from '../components/carFilter/CarFilterComponent';
import NotFoundComponent from '../components/common/NotFoundComponent';


const rootRouter = createBrowserRouter([
    {
        path: "/",
        element: <CarModelComponent />,
    },
    {
        path: "/carFilter",
        element: <CarFilterComponent />,
    },
     {
      path: "*",
      element: <NotFoundComponent />,
    }

]);

export default rootRouter;