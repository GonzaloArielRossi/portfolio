import React from 'react';

import aboutMe from '../../../src/assets/images/aboutme.svg';
export const Hero = () => {
  return (
    <section className="--section-gap --padding">
      <figure className="image">
        <img alt="about me" src={aboutMe} />
      </figure>
    </section>
  );
};
