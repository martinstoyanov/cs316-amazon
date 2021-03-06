import React, {useState} from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Rating from '@material-ui/lab/Rating';

const serverURL = "https://miniamazon-sp9m9.ondigitalocean.app"
const userId = localStorage.getItem('token')

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
            //need to also add review id created to the item's list of review ids and update database

            let reviewId = response.data.review_id

            if (response.status === 201) {
                alert.show('Review successfully posted!')
            }
            else {
                alert.show('An error occured')
            }

            axios.get(`${serverURL}/item/${product._id}`).then(response => {
                let item = response.data.data

                item.reviews.push(reviewId)
                console.log(item)
    
                axios.put(`${serverURL}/item/${product._id}`, item).then(response => {
                    if (response.status === 200) {
                        alert.show('Review successfully added to item!')
                    }
                    else {
                        alert.show('An error occured')
                    }
                })
            })
        });

        // function addToCart(e) {
        //     axios.get(`${serverURL}/cart/${userId}`).then(response => {
        //         let cart = response.data.data
    
        //         cart.items.push(product._id)
    
        //         axios.put(`${serverURL}/cart/${userId}`, cart).then(response => {
        //             if (response.status === 200) {
        //                 alert.show('Item successfully added to cart!')
        //             }
        //             else {
        //                 alert.show('An error occured')
        //             }
        //         })
        //     })
        // }
    }
  
    return (
      <>
        <button className="button button2" onClick={handleShow}>Leave a review!</button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><b>Leave a Review For: </b><b className="yellow-font">{product.item_name}</b></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="review-inputs">
                    <tbody>
                        <tr id="rating">
                            <td><p className="blue-font"><b>Rating:</b></p></td>
                            <Rating name="size-large" defaultValue={null} size="large"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                            />
                        </tr>
                        <tr id="review-text">
                            <td><p className="blue-font"><b>Description:</b></p></td>
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
                <button className="button button2" onClick={addtoReview}>Submit My Review!</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ReviewModal;