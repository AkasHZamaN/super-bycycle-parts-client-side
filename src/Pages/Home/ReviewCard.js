import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import userIcon from "../../Images/userIcon.png";

const ReviewCard = ({ review }) => {
  const [user] = useAuthState(auth);
  

  const { productName, prodPhoto, ratings, reviewText } = review;
  return (
    <div>
      <div className="card w-72 bg-base-100 mx-auto ">
        <div className="avatar pt-4">
          <div className="w-16 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        
            <img src={user?.photoURL ? user?.photoURL : userIcon} alt="" />
          </div>
        </div>
        <div className="rating w-32 mx-auto mt-4">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-green-500"
          />
        </div>

        <div className="card-body items-center text-center">
          <p className="border-2 rounded-3xl px-2 border-green-500">{ratings}</p>
          <h2 className="card-title">{productName}</h2>

          <div className="flex">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src={prodPhoto} alt=""/>
              </div>
            </div>
            <small className="ml-2">{reviewText}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
