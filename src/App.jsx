import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import DetailEvent from "./pages/DetailEvent";

const App = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/details" element={<DetailEvent />}>
                <Routes path="/profile" element={<Profile />}> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App