import React from "react";

export default function Resume() {
  return (
    <div className='section row my-1 mx-3'>
      <span className='gutter col-sm-12 col-md-2'></span>
      <div className='section-cta col-sm-12 col-md-8'>
        <div className='resume'>
          <iframe
            title='Resume'
            src={require("../../assets/docs/CV-JUN-2021.pdf")}
            style={{ width: "100%", height: "80vh" }}
          ></iframe>
        </div>
      </div>
      <span className='gutter col-sm-12 col-md-2'></span>
    </div>
  );
}
