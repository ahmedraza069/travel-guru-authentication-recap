import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Destination from "../pages/Destination/Destination";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:  <div className="text-5xl h-screen font-bold flex justify-center items-center">404</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },{
                path: '/news',
                element: <PrivateRoute>
                     <News></News>
                </PrivateRoute>
            },
            {
                path: '/destination',
                element: <Destination></Destination>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    
    }
])


export default router;