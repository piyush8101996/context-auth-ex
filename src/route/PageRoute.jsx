import { Route, Routes } from 'react-router-dom';
// import { useContext } from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import User from '../pages/User';
import Error from '../pages/Error';
// import { AuthContext } from '../context/AuthContext';

const PageRoute = () => {
    // const auth = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
            {/* <Route path="/user" element={auth.isUserLogin ? <User /> : <Error />} /> */}
            <Route path="/error" element={<Error />} />
        </Routes>
    );
};

export default PageRoute;