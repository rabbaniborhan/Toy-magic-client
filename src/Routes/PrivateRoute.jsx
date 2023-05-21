import  { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location =useLocation()

    const {user,loading}=useContext(AuthContext);


    if(loading){
        return<progress className="progress w-56 mx-auto progress-secondary"></progress>
    }

    return (
        user ? <div>{ children }</div> : <Navigate to={ '/login' } state={ { from: location } } replace />
    );
};

export default PrivateRoute;