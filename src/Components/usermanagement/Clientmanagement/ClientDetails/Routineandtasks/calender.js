import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";


const API_KEY = "YOUR_API_KEY";
let calendars = [
  {calendarId: "irdrcbuu16c9cl3478rbrkec9s@group.calendar.google.com", color: "#B241D1"}, //add a color field to specify the color of a calendar
  {calendarId: "ee62istdt0d1skihhnqp6q47rs@group.calendar.google.com" }, //without a specified color, it defaults to blue (#4786ff)
  {calendarId: "addressbook#contacts@group.v.calendar.google.com", color: "rgb(63, 191, 63)"} //accepts hex and rgb strings (doesn't work with color names)
];

let styles = {
  calendar: {
    borderWidth: "3px", //make outer edge of calendar thicker
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