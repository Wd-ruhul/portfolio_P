import React from 'react';

const ProjectCard = ({ item }) => {
  const { img, project, info, livelink } = item;
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="card w-96 bg-base-100 shadow-xl image-full"
      >
        <figure>
          <img className="w-96" src={img} alt="Project Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{project}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <a href={livelink}>Live Site</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;