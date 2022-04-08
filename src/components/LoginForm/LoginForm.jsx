import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';

const LoginForm  = (props) => {
    const auth  = useContext(AuthContext);
    const user = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changeUsernameHandler = e => setUsername(e.target.value);
    const changePasswordHandler = e => setPassword(e.target.value);
    const doLoginHandler = () => {
        props.doLogin(username,password);
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            {!auth.isUserLogin && (
                <>
                    <div>
                        <label>Username:</label>
                        <input 
                            type="text"
                            placeholder='Username'
                            value={username}
                            onChange={changeUsernameHandler} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={changePasswordHandler} />
                    </div>
                    <div>
                        <button onClick={doLoginHandler} disabled={props.isLoading}>Login</button>
                    </div>
                    <div>
                        {props.isLoginFail && (
                            <p style={{color:'red'}}>Login Failed !!!, Please try again</p>
                        )}
                    </div>
                </>
            )}
            {auth.isUserLogin && (
                <>
                    <h3>Successfully Login, {user?.userData?.name}</h3>
                    {/* <button onClick={props.logoutHandler}>Logout</button> */}
                </>
            )}
        </div>
    );
};

export default LoginForm;