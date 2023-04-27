import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import CarouselBand from '../Carousel/CarouselBand';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <h4>Find us on</h4>
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