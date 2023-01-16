import { Views } from "../views/views.js";

export class Stove {

    /** 
     * Burners status array that contains all burners status inside. It is important to check if a burner is on or off
     */

    burnersList = [];


    /** 
     * Controls list array that contains alll controls inside
     */

    controlsList = [];


    constructor(burners, controls, statusText) {
        this.burners = burners;
        this.controls = controls;
        this.statusText = statusText;
    }


    /** 
     * Init method calls all method
     */

    init() {
        this.populateBurners();
        this.populateControls();
        this.addClickEvent();
    }


    /** 
     * Method to populate burners list
     */

    populateBurners() {
        for (let item of this.burners) {
            const burner_number = item.classList[1];
            const obj = {
                burner: burner_number,
                element: item,
                status: "off"
            }
            this.burnersList.push(obj);
        }
    }


    /** 
     * Method to populare controls list
     */

    populateControls() {
        for (let item of this.controls) {
            const control_number = item.classList[1];
            const obj = {
                control: control_number,
                element: item
            }
            this.controlsList.push(obj);
        }
    }


    /** 
     * Method used to add all burners the on click event to execute a function to turn on or turn off a burner
     */

    addClickEvent() {
        for (let item of this.controlsList) {
            item.element.addEventListener('click', () => this.turn(item))
        }
    }


    /** 
     * Method used to turn on or turn off a burner and change the text to on or off
     */

    turn(value) {
        const control_number = Number(value.control.substring(1))

        // calling Views class from ../views/views.js and providding to it the burnersList and statusText
        const views = new Views(this.burnersList, this.statusText);
        views.turnBurner(control_number);
        views.turnStatus(control_number);
    }


}