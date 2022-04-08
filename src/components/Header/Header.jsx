import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';

const Header = () => {
    const user = useContext(UserContext);
    const auth = useContext(AuthContext);

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/user" >User</Link></li>
                    {!auth.isUserLogin && (
                        <li><Link to="/login" >Login</Link></li>
                    )}
                    {auth.isUserLogin && (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <li><a href="#" onClick={auth.logoutHandler}>Logout</a></li>
                    )}
                </ul>
            </nav>
            <div>
                {auth.isUserLogin && (
                    <h4>Hi, {user.userData.name}</h4>
                )}
                {!auth.isUserLogin && (
                    <h4>Hello, Guest</h4>
                )}
            </div>
        </>
    );
};

export default Header;