import React from "react";

export default function About(props) {
  return (
    <div className='section row my-1 mx-3'>
      <span className='gutter col-sm-12 col-md-2'></span>
      <div className='section-cta col-sm-12 col-md-8'>
        <div className='about'>
          <img
            className='avatar img-thumbnail'
            alt='Avatar'
            src={require("../../assets/images/camper-life.jpg")}
          ></img>
          <p>
            I'm Tom Bellenger and I'm on a journey to return to software
            development after some time in the world of product management.
            Software is where I feel at home. I love learning about the latest
            technologies, continuous growth and building out ideas. Let me come
            and do that for you.
          </p>
        </div>
      </div>
      <span className='gutter col-sm-12 col-md-2'></span>
    </div>
  );
}
