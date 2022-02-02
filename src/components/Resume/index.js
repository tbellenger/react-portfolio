import React from "react";
import { FaFilePdf } from "react-icons/fa";

export default function Resume() {
  return (
    <div className='section row my-1 mx-3'>
      <span className='gutter col-sm-12 col-md-2'></span>
      <div className='section-cta card mt-1 col-sm-12 col-md-8'>
        <div className='resume card-panel pt-1'>
          <a href={require("../../assets/docs/CV-JUN-2021.pdf")}>
            Resume <FaFilePdf size={28} />
          </a>
          <p>
            Expertise in: Mobile Banking, FinTech, Android, Apple Pay, Google
            Pay, Samsung Pay, EMV, NFC, Contactless Payments, Product
            Development, Payments, Identity
          </p>
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
