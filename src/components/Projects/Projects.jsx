import React from 'react';

import projectsData from '../../../data/projectsData.json';

import { Project } from './Project';
import './Projects.css';
export const Projects = () => {
  return (
    <>
      <section className="section">
        <h1 className="has-text-centered is-size-1 mb-6 is-size-1 has-text-weight-bold  has-text-primary">
          My Projects
        </h1>
        <div>
          {projectsData.map((project) => (
            <Project {...project} key={project.id} />
          ))}
        </div>
      </section>
    </>
  );
};
