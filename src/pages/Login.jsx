import { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import LoginForm from '../components/LoginForm/LoginForm';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';

const Login = () => {

    const auth = useContext(AuthContext);
    const user = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(false);
    const [isLoginFail, setIsLoginFail] = useState(false);
    // const [isUserLogin, setIsUserLogin] = useState(false);
    // const [loginUsername, setLoginUserName] = useState('');
    const logoutHandler = () => {
        // setIsUserLogin(false);
        auth.logoutHandler();
        // setLoginUserName('');
        user.setUserDataHandler({
            name:''
        });
    };

    const doLoginHandler = (username, password) => {
        setIsLoginFail(false);
        setIsLoading(true);
        // Sumilate the login api call
        setTimeout(()=>{
            if(username === 'admin' && password === 'admin'){
                // setIsUserLogin(true);
                auth.loginHandler();
                setIsLoginFail(false);
                // setLoginUserName(username);
                user.setUserDataHandler({
                    name: username
                });
            }else {
                // setIsUserLogin(false);
                auth.logoutHandler();
                setIsLoginFail(true);
            }
            setIsLoading(false);
        },1500);
    };

    return (
        <>
            <h1>Login Page</h1>
            <LoginForm 
                doLogin={doLoginHandler}
                isLoading={isLoading}
                isLoginFail={isLoginFail}
                logoutHandler={logoutHandler}/>
        </>
    );
};

export default Login;