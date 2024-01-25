import {
    Outlet,
    Link,
    createBrowserRouter,
    RouterProvider,
    useNavigation,
} from "react-router-dom";

import App from '../app/components/carModel/App';
import CarFilter from '../app/components/carFilter/carFilter';

// function noMatch() {
//     return <div>No Route Found</div>
// };

const rootRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/carFilter",
        element: <CarFilter />,
    },
    //  {
    //   path: "*",
    //   element: <Message />,
    // }

]);

export default rootRouter;