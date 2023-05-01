import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false);
    const { createUser, updateUserProfile, emailVerify } = useContext(AuthContext);


    const handleSubmitSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photourl, email, password)

        createUser(email, password)
            .then(result => {
                result.user;
                updateProfile(name, photourl);
                setError('');
                form.reset();
                verificationEmail();
                toast.success('Please verify your email')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })

    }

    const updateProfile = (name, photourl) => {
        updateUserProfile(name, photourl)
            .then(() => { })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleChecked = event => {
        setAccept(event.target.checked)
    }

    const verificationEmail = () => {
        emailVerify()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <h2 className='text-center my-5'>Sign Up</h2>
            <Form onSubmit={handleSubmitSignUp}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control name='name' type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photourl' type="text" placeholder="Enter photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-muted">
                        Allready have an account ? <Link to='/sign-in'>Sign In</Link>
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicError">
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleChecked} type="checkbox" label={<>Accept <Link to='/terms-condition'>Terms & Condition</Link></>} />
                </Form.Group>
                <Button disabled={!accept} variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;