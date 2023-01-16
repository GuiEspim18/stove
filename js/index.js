import { Stove } from "./models/models.js";

/* Variables */

/** 
 * Burners list that get all burners from html
 */

const burners = document.querySelectorAll("div#burner");


/** 
 * Controls list that get all controls from html
 */

const controls = document.querySelectorAll("button#control");


/** 
 * Status list that get all text status from controls
 */

const statusText = document.querySelectorAll("p.status");


/** 
 * Light button get the light button to turn on the light
 */

const lightButton = document.querySelector("button.light-button")


/* Calling stove class */

new Stove(burners, controls, statusText, lightButton).init();