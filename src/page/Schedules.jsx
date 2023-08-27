import React from "react";
import Card from "../component/Card";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Schedules = () => {
  return (
    <>
      <div className="container">
        <div className="daylist">
            <div>
          <h2 className="m-3">Schedules</h2>
          <h3 className="m-3">Default</h3>
          <Card day="Sunday" availability="Unavailable" />
          <Card day="Sunday" availability="Unavailable" />
          <Card day="Sunday" availability="Unavailable" />
          <Card day="Sunday" availability="Unavailable" />
          <Card day="Sunday" availability="Unavailable" />
          <Card day="Sunday" availability="Unavailable" />
          <Card day="Sunday" availability="Unavailable" />
          </div>
          <div className="calander">
          <Calendar />
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Schedules;
