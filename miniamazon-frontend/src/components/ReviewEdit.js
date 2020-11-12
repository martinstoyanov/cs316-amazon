import React, { useEffect, useState, useCallback } from "react";
import { useAlert } from 'react-alert'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Rating from '@material-ui/lab/Rating';

const serverURL = "http://localhost:8888"
const userId = "5f8b8eee77a1ab596021f8c4"

function ReviewEdit({review}){    

    const alert = useAlert()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show, setShow] = useState(false);
    const [rating, setRating] = React.useState(review.review_rating);
    const [reviewtext, setReviewText] = React.useState(0);
    const [productName, setProductName] = useState([]);

    const loadProductName = useCallback(() => {
        axios.get(`${serverURL}/item/${review.item_id}`).then((response) => {
            setProductName(response.data.data.item_name);
        });
      }, []);
    
    
    useEffect(() => {
        loadProductName();
    }, [loadProductName]);

    function editReview() {
        handleClose();

        axios.get(`${serverURL}/review/${review._id}`).then(response => {
            let review = response.data.data

            let updatedRating = rating
            let updatedText = reviewtext

            review.review_rating = updatedRating
            review.review_notes = updatedText

            axios.put(`${serverURL}/review/${review._id}`, review).then(response => {
                if (response.status === 200) {
                    alert.show('Review successfully edited!')
                }
                else {
                    alert.show('An error occured')
                }
            })
        })
    }

    return(
        <div>
            <h3>
                <b>Product:</b><br/>
                <a href={"/items/" + review.item_id}>
                    <div style={{fontSize: 24}}> {productName}</div>
                </a>
                <b>Your Rating:</b><br/> {review.review_rating} <br/>
                <b>Your Description:</b><br/> {review.review_notes}<br/>
                <br/>
            </h3> 
            <button className="btn btn-secondary" onClick={handleShow}>Edit This Review</button><br/><br/><br/>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="review-inputs">
                    <tbody>
                        <tr id="rating">
                            <td><p className = "label">Rating:</p></td>
                            <Rating name="size-large" value={review.review_rating} size="large"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                            />
                        </tr>
                        <tr id="review-text">
                            <td><p className = "label">Description:</p></td>
                            <td><textarea rows={8} cols={40} defaultValue={review.review_notes}
                            onChange={(event) => {
                                setReviewText(event.target.value)
                            }}
                            />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" onClick={editReview}>Submit My Changes!</Button>
          </Modal.Footer>
        </Modal>
        </div>
    
    )
}

export default ReviewEdit;