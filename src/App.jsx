import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Event from "./pages/Event";
import Tickets from "./pages/Tickets";
import Payment from "./pages/Payment";
import ChangePassword from "./pages/ChangePassword";
import MyBooking from "./pages/MyBooking";
import MyWishlist from "./pages/MyWishlist";
import CreateEvent from "./pages/CreateEvent";

const App = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/register" element={<Register />} />
                <Route path="/event" element={<Event />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/my-booking" element={<MyBooking />} />
                <Route path="/my-wishlist" element={<MyWishlist />} />
                <Route path="/create-event" element={<CreateEvent />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App