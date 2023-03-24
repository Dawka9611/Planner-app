import { Route, Router, Routes } from 'react-router-dom';
import FrontPage from '../pages/FrontPage';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<FrontPage />} />
        </Routes>
    )
}

export default Routers