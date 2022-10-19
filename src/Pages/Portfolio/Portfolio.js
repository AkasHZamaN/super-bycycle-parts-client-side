import { AcademicCapIcon, LinkIcon, MailIcon } from "@heroicons/react/solid";
import React from "react";

const Portfolio = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.postimg.cc/mgYwrmKm/akash.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
         alt=""/>
        <div>
          <h1 className="text-2xl font-bold">Md. Kawser Uzzaman</h1>
          <div className="py-6">
            <p className="flex mb-2"><MailIcon className="w-6 h-6 mr-2"></MailIcon> <span>kawseruzzaman05@gamil.com</span></p>
            <div>
            <p className="flex items-start"><AcademicCapIcon className="w-6 h-6 mr-2"></AcademicCapIcon><span> Leading University, Sylhet</span></p>
            <small className="ml-8">Department CSE Graduated February 2022</small>
            <p className="flex items-start mt-2"><AcademicCapIcon className="w-6 h-6 mr-2"></AcademicCapIcon><span> Sylhet Government College</span></p>
            <small className="ml-8">Science HSC Batch-2017</small>
            <p className="flex items-start mt-2"><AcademicCapIcon className="w-6 h-6 mr-2"></AcademicCapIcon><span> Sylhet Government Pilot High School</span></p>
            <small className="ml-8">Science SSC Batch-2015</small>
            </div>
            <div className="flex mt-2">
                <img className="w-6 h-6" src="https://i.postimg.cc/PxGx3kt4/skills-Icons.png" alt="" />
                <p className="ml-8">
                    <span className="mr-2">HTML</span>
                    <span className="mr-2">CSS</span>
                    <span className="mr-2">JavaScript</span> <br />
                    <span className="mr-2">React Js</span>
                    <span className="mr-2">React Router</span>
                    <span className="mr-2">Node Js</span> <br />
                    <span className="mr-2">Express Js</span>
                    <span className="mr-2">MongoDB etc</span>
                </p>
            </div>
            <div className="flex mt-2">
                <LinkIcon className="w-6 h-6"></LinkIcon>
               <p className="ml-8">
               <a href="https://super-bycycle.web.app/">Super By Cycle Parts Shop</a><br />
               <a href="https://grocery-farm-ff36c.web.app/">Gorcery Farm & Organic Food</a><br />
               <a href="https://alex-gym-stone.web.app/">Alex GYM Stone</a><br />
               </p>
            </div>
          </div>
          <button className="btn btn-accent">Hire Me!</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
