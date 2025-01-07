import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../layout/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layout/dashboard";
import Product from "../pages/Product";
import PrivateRoute from "../protectedRoute/PrivateRoute";





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
            },
            {
                path:"/dashboard",
                element:
                (
                    <PrivateRoute>
<Dashboard/>
                    </PrivateRoute>
                
                ),
                children:[
                    {
                        path:"product",
                        element:<Product/>
                    }
                ]
            }
        ]
        
    }

])


export default router