import React, {useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Rating from '@material-ui/lab/Rating';

const serverURL = "http://localhost:8888"
const userId = "5f8b8eee77a1ab596021f8c4"

function ReviewModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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

        axios.post(`${serverURL}/review`, {item_id: '123456789', user_id: userId, review_rating: rating, review_notes: reviewtext}).then((response1) => {
            console.log(response1);
          }, (error) => {
            console.log(error);
        });

        // axios.get(`${serverURL}/cart/${userId}`).then((response1) => {
        //     axios.get(`${serverURL}/items`).then((response2) => {
        //         let items = response1.data.data.items
        //         let products = []
        //         items.forEach(i => {
        //             response2.data.data.forEach(product => {
        //                 if (i === product._id) {
        //                     products.push(product)
        //                 }
        //             })
        //         })
        //         this.setState({ products: products })
        //     });
        // });
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Leave a review!
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Leave a Review!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>List Product Name</p>
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
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" onClick={addtoReview}>Submit Review!</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ReviewModal;