import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Error = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/login');
        },5000);
    },[navigate]);
    
    return (
        <div>
            <h3>You are not allowed to access this page.</h3>
            <p>Please login to access this page</p>
            <p>You will auto redirect to login page after 5 second.</p>
            <p> Or you can click this <Link to="/login">link</Link> for login.</p>
        </div>
    );
};

export default Error;