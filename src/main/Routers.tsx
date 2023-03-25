import FrontPage from '../pages/FrontPage';
import Login from '../pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from '../pages/Signup';

const Routers = () => {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="/reset-pass" element={<ResetPassHomePage />} />
            <Route path="/reset-pass-detail" element={<ResetPassword />} />
            <Route element={<RequireAuth role={user_type} />}>
                <Route path="/content" element={<><User /><Admin /></>} />
            </Route> */}

                <Route path="*" element={<div>404 - Хуудас олдсонгүй</div>} />
            </Routes>
        // </BrowserRouter>
    )
}

export default Routers