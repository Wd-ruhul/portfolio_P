import React from "react";
import ruhul from "../../Assets/JB-16002.jpg"
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";


const Banner = () => {

 const onButtonClick = () => {
   // using Java Script method to get PDF file
   fetch("RuhulAmin_Resume.pdf").then((response) => {
     response.blob().then((blob) => {
       // Creating new object of PDF file
       const fileURL = window.URL.createObjectURL(blob);
       // Setting various property values
       let alink = document.createElement("a");
       alink.href = fileURL;
       alink.download = "RuhulAmin_Resume.pdf";
       alink.click();
       toast(' Successfully Download!');
     });
   });
 };


  return (
    <section className=" bg-base-200 mt-5">
      <div className="grid lg:grid-cols-2 min-h-screen  ">
        <div
          data-aos="zoom-out-right"
          className="flex flex-col justify-center items-center"
        >
          <center className="mb-5">
            <button className="btn btn-primary" onClick={onButtonClick}>
              <span className="mr-2">
                <FaDownload />
              </span>
              Download Resume
            </button>
          </center>
          <h2 className="text-5xl bold">I'm Ruhul Amin</h2>
          <h2 className="text-4xl bold">Front-End Developer</h2>
          <div className="mt-5">
            <div className="mb-5">
              <a className="text-4xl  " href="https://github.com/Wd-ruhul">
                <FaGithub />
              </a>
            </div>
            <a className="text-4xl  " href="https://github.com/Wd-ruhul">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="flex  justify-center items-center">
          <div data-aos="zoom-out-left" className="avatar">
            <div className="w-48 rounded-xl">
              <img src={ruhul} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
