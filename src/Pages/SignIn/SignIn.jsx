import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const SignIn = () => {
    const [error, setError] = useState('');
    const {signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmitSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                    toast.success('Login Succesfull')
                }else{
                    toast.error('Your email is not verify')
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })

            .finally(() => {
                setLoading(false)
            })
    }



    return (
        <div>
            <h2 className='text-center my-5'>Login</h2>
            <Form onSubmit={handleSubmitSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSignin">
                    <Form.Text className="text-muted">
                        Don't have an account ? <Link to='/sign-up'>Sign Up</Link>
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicError">
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default SignIn;