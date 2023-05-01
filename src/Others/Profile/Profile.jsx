import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName)

    const photoURLref = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLref.current.value);
    }

    const updateUserName = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <h3>User Profile</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control onChange={updateUserName} defaultValue={name} type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control ref={photoURLref} defaultValue={user?.photoURL} type="text" placeholder="photourl" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;