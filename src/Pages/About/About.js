import React from 'react';
import ruhul from '../../Assets/JB-16002.jpg'


const About = () => {
  return (
    <section className="p-5">
      <h1 className="text-5xl font-bold mb-8">About Me</h1>

      <div className="flex">
        <div className="w-1/3 ">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="card flex-shrink-0 w-full  shadow-2xl bg-base-100"
          >
            <div className="card-body grid ">
              <center>
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={ruhul} />
                  </div>
                </div>
              </center>
              <p>
                I am a MERN-Stack developer. I have been doing web development
                for one years now. I have a great passion for coding in general.
                I have good hands-on experience with both Front-End and Back-End
                development .
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default About;