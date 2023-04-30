import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const TermsCondition = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    return (
        <div>
            <h1>This is Terms and Condition</h1>
            <Button>
                {
                    <Link className='text-decoration-none text-white' to='/sign-up'>Go Back</Link>
                }
            </Button>
        </div>
    );
};

export default TermsCondition;