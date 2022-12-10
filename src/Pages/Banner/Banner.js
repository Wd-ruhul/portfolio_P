import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-right">
            <h1 className="text-5xl font-bold">I'm Ruhl Amin</h1>
            <h1 className="text-4xl font-bold">Front-End Developer</h1>
       
          </div>

          <div className=" w-1/2 shadow-2xl bg-base-100">
            <div className="card-body ">
              <div className="avatar">
                <div className="w-3/4 rounded">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;