import React from "react";

const ContactForm = () => {
  return (
    <div>
      <input type="checkbox" id="contactModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action">
            <label
              htmlFor="contactModal"
              className="btn btn-circle btn-outline btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input border-accent w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input border-accent w-full max-w-xs"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Type Your Text</span>
            </label>
            <textarea
              className="textarea border-accent h-24 w-full max-w-xs"
              placeholder="Type Your Text"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              className="input bg-accent text-white font-semibold uppercase mt-6 w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
