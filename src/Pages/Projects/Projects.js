import React from 'react';
import ProjectCard from './ProjectCard';
import reseller from '../../Assets/reseller.png'
import agro from '../../Assets/agro.png'
import quiz from '../../Assets/quiz.png'

const Projects = () => {
  const items = [
    {
      id: 1,
      img: reseller,
      project: "Reseller Bd",
      info: "",
      livelink: "https://reselldotcom-c7545.web.app/",
    },
    {
      id: 2,
      img: agro,
      project: "Agro Service",
      info: "",
      livelink: "https://assignment-eleven-client-acffc.web.app/",
    },
    {
      id: 3,
      img: quiz,
      project: "Developer Quiz",
      info: "",
      livelink: "https://remarkable-boba-8c7703.netlify.app/",
    },
  ];
  return (
    <section className="mt-5 mb-5 p-5">
      <h2 className="text-5xl bold mb-5">Projects</h2>
      <div className="grid lg:grid-cols-3 gap-3 ">
        {items.map((item, i) => (
          <ProjectCard key={i} item={item}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;