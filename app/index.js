import document from "document";
import clock from "clock";
import TimR from "timer.js";


clock.granularity = "minutes";
clock.ontick = (evt) => {
   console.log(evt.date.toTimeString());
  
}

function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

// Regex
let re = /ab+c/;



let woo = document.getElementById("arc_time");
//let NONO = woo.style.getPropertyValue("start-angle");


let demotext = document.getElementById("demotext");
//demotext.text = "NONO";

import document from "document";
import * as messaging from "messaging";

var current_time_ms = 500;

step();



function Countdown(time) {

  //let arc = document.getElementById("arc_time");
  //int start = parseInt(convert.arc.style.start-angle);
  
}