import React from "react";

const Skill = () => {
  return (
    <section className="h-4/6 p-5 bg-base-200">
      <h2 className="text-5xl">Skill</h2>

      <div className="flex flex-col gap-5 w-1/2">
        <div className="flex justify-center items-center ">
          <span className="mr-5">React</span>
          <progress
            className="progress progress-primary "
            value="80"
            max="100"
          ></progress>
        </div>
        <div className="flex justify-center items-center ">
          <p className="mr-5">NodeJS</p>
          <progress
            className="progress progress-primary "
            value="60"
            max="100"
          ></progress>
        </div>
        <div className="flex justify-center items-center ">
          <span className="mr-5">JavaScript</span>
          <progress
            className="progress progress-primary "
            value="90"
            max="100"
          ></progress>
        </div>
        <div className="flex justify-center items-center ">
          <span className="mr-5">ExpressJS</span>
          <progress
            className="progress progress-primary "
            value="60"
            max="100"
          ></progress>
        </div>
      </div>
    </section>
  );
};

export default Skill;
