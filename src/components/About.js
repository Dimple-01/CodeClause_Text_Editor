//Dark Mode Immplementation

import PropTypes from "prop-types";
import React, { useState } from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
  };
 

  return (
        <div className="aboutsection" style={myStyle}>
      <h2>About</h2>
      <div className="accordion my-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Simplify Writing Process</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Our text editor app is designed to streamline your writing process and eliminate distractions. With a clean and minimalist interface, you can focus solely on your content without any unnecessary clutter. We believe that simplicity is key when it comes to enhancing productivity and unleashing your creativity.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
               <strong>Dark Mode</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Our basic text editor app is designed to provide a simplified and enjoyable writing experience, and we are proud to offer a dark mode feature. Dark mode reduces eye strain and enhances readability, especially in low-light environments. Whether you prefer a dark-themed interface or need to work during late hours, our dark mode option ensures that you can write comfortably and with reduced visual fatigue.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
                <strong>Empower writers</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>With our text editor app, we aim to empower writers of all kinds, from students and professionals to bloggers and creative writers, providing them with a tool that makes writing enjoyable, efficient, and hassle-free. Get ready to unlock your writing potential with our innovative features and intuitive interface.</strong>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
