import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import userIcon from "../../Images/userIcon.png";
import { useForm } from "react-hook-form";




const AddReview = () => {
    
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  
  

  const addReview = (data, event) => {
    console.log(data);
    const url = `https://mighty-river-69117.herokuapp.com/review`;
    fetch(url,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(addReview)}>
        <div className="card w-96  bg-base-100 shadow-xl">
          <figure>
            <div className="avatar pt-2 ">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL ? user?.photoURL : userIcon} alt="" />
              </div>
            </div>
          </figure>
          <div className="card-body text-center">

            <select className="select w-full max-w-xs" {...register("ratings")}>
                <option defaultValue={"Select Your Ratings"}>Select Your Ratings</option>
                <option value={"1 out of 5"}>1 out of 5</option>
                <option value={"2 out of 5"}>2 out of 5</option>
                <option value={"3 out of 5"}>3 out of 5</option>
                <option value={"4 out of 5"}>4 out of 5</option>
                <option value={"5 out of 5"}>5 out of 5</option>
            </select>
            

            <input
              type="text"
              name="productName"
              id="productName"
              placeholder="Product Name..."
              className="input input-bordered input-primary w-full max-w-xs"

              {...register("productName", { required: true })}
            />

            <input type="text" name="prodPhoto" id="file"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Product Photo URL..."
            {...register("prodPhoto", { required: true })}
            />
            
            <textarea
              className="w-full textarea textarea-primary"
              name="reviewText"
              id="reviewText"
              placeholder="Type Your Review Text"
              {...register("reviewText", { required: true })}
            ></textarea>
            <input
              type="submit"
              className="w-full cursor-pointer bg-primary rounded-md mt-2 py-1 text-white"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
