import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";

export const ROUTER_PATHS = {
    ROOT: "/",
    APP: "app",
    COURSE: "course/:id"
};


export function getRouter(): any
{
    return createBrowserRouter([
        {
            path: ROUTER_PATHS.ROOT+ROUTER_PATHS.APP,
            element: <App/>,
            children: [

            ]
        },

        {
            path: ROUTER_PATHS.ROOT,
            loader: ()=>redirect(ROUTER_PATHS.ROOT+ROUTER_PATHS.APP)
        }
    ]);
}