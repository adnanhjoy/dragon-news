import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

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
                form.reset();
            })
            .catch(error => console.error(error))

    }

    const updateProfile = (name, photourl) => {
        updateUserProfile(name, photourl)
        .then(() => {})
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
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;