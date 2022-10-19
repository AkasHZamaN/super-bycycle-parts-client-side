import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ReviewCard from "./ReviewCard";


const ReviewArea = () => {
    const [user] = useAuthState(auth)
    const [reviews, setReview] = useState([]);

    useEffect(()=>{
        const url = `https://mighty-river-69117.herokuapp.com/review`;
        fetch(url)
        .then(res => res.json())
        .then(data => setReview(data))
    },[user])


  return (
    <div>
      <div className='grid grid-cols-1 md:gridcols-2 lg:grid-cols-4 gap-4 px-6'>
        {
            reviews.map(review => <ReviewCard 
                key={review._id} 
                review={review}
            ></ReviewCard>)
        }
      </div>
    </div>
  );
};

export default ReviewArea;
