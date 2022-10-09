import React from 'react';
import { VscGithub, VscRocket } from 'react-icons/vsc';
import { isMobile } from 'react-device-detect';

export const Project = (props) => {
  return (
    <>
      <div className="box --item-gap">
        <div className="has-text-centered has-text-weight-bold mb-6 is-size-2">
          {props.name}
        </div>
        <div className="columns is-8 is-vcentered ">
          {props.id % 2 === 0 && (
            <figure className="image column is-two-thirds">
              <img
                alt={props.alt}
                className="--shadow --image"
                src={props.gif}
              />
            </figure>
          )}
          <div className="is-flex is-flex-direction-column --flex-gap-2 --project-info column is-one-half is-size-5">
            <div className="has-text-centered">{props.description}</div>
            <div className="is-flex is-flex-direction-column --flex-gap-0">
              <span className="has-text-weight-semibold has-text-centered is-6 mb-2 has-text-primary">
                Dev Tools
              </span>
              {props.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="has-text-weight-medium has-text-centered is-6"
                >
                  {tech}
                </div>
              ))}
            </div>
            <div className="is-align-self-center">
              <a
                className="is-size-2 "
                href={props.githubLink}
                rel="noreferrer"
                target="_blank"
              >
                <VscGithub className="--hover --hover-color" />
              </a>
              {!isMobile && (
                <a
                  className="ml-6 is-size-2 "
                  href={props.deployLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  <VscRocket className="--hover --hover-color" />
                </a>
              )}
            </div>
          </div>
          {props.id % 2 !== 0 && (
            <figure className="image column is-two-thirds">
              <img
                alt={props.alt}
                className="--shadow --image"
                src={props.gif}
              />
            </figure>
          )}
        </div>
      </div>
    </>
  );
};
