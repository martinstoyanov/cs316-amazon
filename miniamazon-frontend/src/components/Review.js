import React from 'react';

function Review({review}){    
    return(
        <div>
            <h2>
                Review User: {review.user_id} <br/>
                Rating: {review.review_rating} <br/>
                Description: {review.review_notes} <br/>
                <br/>
            </h2> 
        </div>
    )
}

export default Review;