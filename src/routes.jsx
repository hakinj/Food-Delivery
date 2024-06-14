import { createBrowserRouter } from 'react-router-dom'
import Loginpage from './modules/user/pages/Loginpage';
import Signup from './modules/user/pages/Signup';
import Dashboard from './modules/user/pages/Dashboard';
import PasswordUpdatePage from './modules/user/pages/PasswordUpdatePage';
import PasswordUpdated from './modules/user/layout/PasswordUpdated';
import Homepage from './modules/auth/home/Homepage';
import AdminSignUp from './modules/admin/pages/AdminSignUp';
import AdminLogin from './modules/admin/pages/AdminLogin';
import CreatRiderSignup from './modules/admin/pages/CreatRiderSignup';
import RiderLoginpage from './modules/rider/pages/RiderLoginpage';
import Foodtypepage from './modules/admin/pages/Foodtypepage';
import Uploaded from './modules/admin/pages/Uploaded';
import Checkout from './modules/user/pages/Checkout';
import RecieptPage from './modules/user/pages/RecieptPage';
import Progressbar from './modules/user/layout/Progressbar';
import Success from './modules/user/layout/Success';
import EmailforPassword from './modules/user/layout/Emailforpassword';
import ProtectedRoutesProvider from './modules/context/ProtectedRoutes';
import AdminDash from './modules/admin/pages/AdminDash';
import RiderDash from './modules/rider/pages/RiderDash';




export const router = createBrowserRouter([

    {
        path: '/homepage',
        element: <Homepage/>

    },
    {
        path: '/loginpage',
        element: <Loginpage />
    },
    {
        path: '/signup',
        element: <Signup/>

    },
    {
        path: '/dashboard',
        element: <ProtectedRoutesProvider><Dashboard/></ProtectedRoutesProvider> 
    },
    {
        path: '/sendemailtoresetpassword',
        element: <ProtectedRoutesProvider><PasswordUpdatePage/></ProtectedRoutesProvider>  
    },
    {
        path: '/passwordupdatedsuccessfully',
        element: <ProtectedRoutesProvider><PasswordUpdated/></ProtectedRoutesProvider>
    },
    {
        path: '/adminsignup',
        element: <AdminSignUp/>

    },
    {
        path: '/adminlogin',
        element: <ProtectAdminProvider><AdminLogin/></ProtectAdminProvider>  
    },
    {
        path: '/ridersignup',
        element: <CreatRiderSignup/>

    },
    {
        path: '/riderlogin',
        element:  <ProtectRiderProvider><RiderLoginpage/></ProtectRiderProvider> 
    },
    {
        path: '/foodtypeinputpage',
        element: <ProtectAdminProvider><Foodtypepage/></ProtectAdminProvider>
    },
    {
        path: '/foodtypeuploaded',
        element: <ProtectAdminProvider><Uploaded/></ProtectAdminProvider> 
    },
    {
        path: '/progressbar',
        element: <Progressbar/>
    },
    {
        path: '/checkoutpage',
        element: <ProtectedRoutesProvider><Checkout/></ProtectedRoutesProvider>
    },
    {
        path: '/recieptpage',
        element: <ProtectedRoutesProvider> <RecieptPage/></ProtectedRoutesProvider>
    },
    {
        path: '/successicon',
        element: <Success/>
    },
    {
        path: '/emailsuccessfulsent',
        element: <ProtectedRoutesProvider><EmailforPassword/></ProtectedRoutesProvider>
    },
    {
        path: '/admindashboard',
        element: <ProtectAdminProvider><AdminDash/></ProtectAdminProvider>  
    },
    {
        path: '/riderdashboard',
        element: <ProtectRiderProvider><RiderDash/></ProtectRiderProvider> 
    }

])