import React from "react";
import Button from "../component/Button";
import Woman from "../image/Woman.png";

const Services = () => {
  return (
    <>
      <div className="container">
        <h2 className="m-3">Services</h2>
        <div className="serviceButton">
          {/* name used for props */}
          <a href="/Call"><Button name="1:1 Call" /></a>
          <Button name="Text Query" />
          <Button name="Webinar" />
          <Button name=" + Add service" />
        </div>
        <div className="woman">
          <img src={Woman} alt="Woman" />
          <Button name=" + Add service" />
        </div>
      </div>
    </>
  );
};

export default Services;
