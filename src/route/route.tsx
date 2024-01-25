import {
    createBrowserRouter,
} from "react-router-dom";

import CarModelComponent from '../app/components/carModel/CarModelComponent';
import CarFilterComponent from '../app/components/carFilter/CarFilterComponent';
import NotFoundComponent from '../app/components/NotFoundComponent';


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