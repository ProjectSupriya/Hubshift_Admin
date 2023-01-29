import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";


const API_KEY = "YOUR_API_KEY";
let calendars = [
  {calendarId: "irdrcbuu16c9cl3478rbrkec9s@group.calendar.google.com", color: "#B241D1"}, 
  {calendarId: "ee62istdt0d1skihhnqp6q47rs@group.calendar.google.com" }, 
  {calendarId: "addressbook#contacts@group.v.calendar.google.com", color: "rgb(63, 191, 63)"} 
];

let styles = {
  calendar: {
    borderWidth: "3px", 
  },
  
  today: css`
   /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
}

class Example extends React.Component {
  render() {
    return (
      <div>
      
        <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
        
      </div>
    )
  }
}
export default Example;