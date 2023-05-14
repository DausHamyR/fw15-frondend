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
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import PrivateRoute from "./components/PrivateRoute";
import {PersistGate} from 'redux-persist/integration/react'
import SearchResults from "./pages/SearchResults";

const App = ()=> {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/events/:id" element={<Event />} />
                        <Route path="/tickets" element={<PrivateRoute><Tickets /></PrivateRoute>} />
                        <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
                        <Route path="/change-password" element={<ChangePassword />} />
                        <Route path="/my-booking" element={<MyBooking />} />
                        <Route path="/my-wishlist" element={<MyWishlist />} />
                        <Route path="/create-event" element={<CreateEvent />} />
                        <Route path="/search" element={<SearchResults />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App