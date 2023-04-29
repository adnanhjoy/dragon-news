import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummary = ({ news }) => {
    const { _id, title, details, image_url, total_view, author, rating } = news;
    console.log(news)
    return (
        <Card className='mb-4'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <img className='rounded-circle' src={author?.img} alt="author" style={{ height: 60, width: 60 }} />
                    <div className='ms-2'>
                        <p className='m-0'>{author?.name}</p>
                        <p className='m-0'>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2' />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 250 ? <p>{details.slice(0, 250) + '...'} <Link to={`news/${_id}`}>Read More</Link></p> : details}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                    <FaStar className='text-warning me-2'></FaStar>
                    <p className='m-0'>{rating?.number}</p>
                </div>
                <div className='d-flex align-items-center'>
                    <FaEye className='me-2'></FaEye>
                    <p className='m-0'>{total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummary;