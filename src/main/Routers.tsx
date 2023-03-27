import FrontPage from '../pages/FrontPage';
import Login from '../pages/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from '../pages/Signup';

const Routers = () => {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<div>404 - Хуудас олдсонгүй</div>} />
            </Routes>
        // </BrowserRouter>
    )
}

export default Routers