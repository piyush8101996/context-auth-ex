import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Error from '../pages/Error';

export const privatePageHoc = (Component) => {

    return (props) => {
        const auth = useContext(AuthContext);

        return auth.isUserLogin ? <Component {...props} /> : <Error />;
        
    };
};