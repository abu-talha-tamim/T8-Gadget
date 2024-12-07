import { Await, createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Deatails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [

            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'statistics',
                element: <Statistics />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },

            {
                path: "/details/:id",
                element: <Details />,
                loader: async () => {
                  console.log("loader running");
                  const response = await fetch("/gadgets.json");
                  console.log("done");
                  if (!response.ok) {
                    console.log("running");
                    throw new Error("Failed to fetch gadgets data");
                  }
                  return response.json();
                },
              },
        ]
    },

])

export default routes;