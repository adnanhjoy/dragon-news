import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import CarouselBand from '../Carousel/CarouselBand';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const {googleSignIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleSubmitGoogle = () => {
        googleSignIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    
    return (
        <div>
            <ButtonGroup className='w-100 gap-2' vertical>
                <Button className='rounded' onClick={handleSubmitGoogle} variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='rounded' variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <h4 className='mt-4'>Find us on</h4>
            <ListGroup>
                <ListGroup.Item className='mb-2 border border-dark rounded'><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2 border border-dark rounded'><FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2 border border-dark rounded'><FaInstagram /> Instagram</ListGroup.Item>
                <ListGroup.Item className='mb-2 border border-dark rounded'><FaGithub /> Github</ListGroup.Item>
                <ListGroup.Item className='mb-2 border border-dark rounded'><FaPinterest /> Pinterest</ListGroup.Item>
            </ListGroup>
            <CarouselBand></CarouselBand>
        </div>
    );
};

export default RightSideNav;