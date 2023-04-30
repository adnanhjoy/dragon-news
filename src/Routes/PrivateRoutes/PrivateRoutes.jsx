import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='text-center mt-5'>
            <Spinner animation="border" />;
        </div>
    }

    if (!user) {
        return <Navigate to='/sign-in' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoutes;