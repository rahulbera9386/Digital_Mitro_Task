import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../layout/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";




const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/auth",
                element:<Auth/>,
                children:[
                    {
                        path:"login",
                        element:<Login/>
                    },
                    {
                        path:"register",
                        element:<Register/>
                    }
                ]
            }
        ]
    }

])


export default router