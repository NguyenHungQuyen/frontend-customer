import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset_Password from "./Pages/Reset_Password";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Forgot_Password from "./Pages/Forgot_Password";
import Home from "./Pages/Home";

    
export default function Router() {
    return (
        <BrowserRouter>
             <Routes>
        <Route path="/*"/>
        <Route index element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/forgot_password" element={<Forgot_Password/>}/>
        <Route path="/reset_password" element={<Reset_Password/>}/>
      </Routes>  

            </BrowserRouter>

        );
    }