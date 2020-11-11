import React, {useState} from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Rating from '@material-ui/lab/Rating';

const serverURL = "http://localhost:8888"
const userId = "5f8b8eee77a1ab596021f8c4"

function ReviewModal({product}) {

    const alert = useAlert()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show, setShow] = useState(false);
    const [rating, setRating] = React.useState(0);
    const [reviewtext, setReviewText] = React.useState(0);
    
    function addtoReview() {
        handleClose();
        // Post the Review 
        // Get the ReviewID from response of post
        // Add array of reviews to item but first ask martin so i dont eff stuff up
        // Get the Product's list of reviews: server/items/Productid or somth
        // let review = response.data...
        // push
        // put///

        axios.post(`${serverURL}/review`, 
        {item_id: product._id, user_id: userId, review_rating: rating, review_notes: reviewtext}).then((response) => {
            if (response.status === 200) {
                alert.show('Review Successfully Posted!')
            }
            else {
                alert.show('An error occured')
            }
        });
    }
  
    return (
      <>
        <button className="btn btn-secondary" onClick={handleShow}>Leave a review!</button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Leave a Review For: <b>{product.item_name}</b></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="review-inputs">
                    <tbody>
                        <tr id="rating">
                            <td><p className = "label">Rating:</p></td>
                            <Rating name="size-large" defaultValue={null} size="large"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                            />
                        </tr>
                        <tr id="review-text">
                            <td><p className = "label">Description:</p></td>
                            <td><textarea rows={8} cols={40} 
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
                <Button variant="primary" onClick={addtoReview}>Submit My Review!</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ReviewModal;