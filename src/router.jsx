import { createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";

const router = createBrowserRouter([

    {
        path: "contact",
        element: <Contact/>,
    },

]);
export {router};