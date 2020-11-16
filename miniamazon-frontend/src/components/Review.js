import React from 'react';

function Review({review}){    
    return(
        <div>
            <h3>
                Review User: <b className="blue-font">{review.user_id}</b> <br/>
                Rating: <b className="blue-font">{review.review_rating}</b> <br/>
                Description: <b className="blue-font">{review.review_notes}</b> <br/>
                <br/>
            </h3> 
        </div>
    )
}

export default Review;