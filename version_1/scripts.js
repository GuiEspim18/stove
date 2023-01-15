/* Variables */

/** 
 * Burners list that get all burners from html
 */

const burners = document.querySelectorAll("div.burner")


/** 
 * Controls list that get all controls from html
 */

const controls = document.querySelectorAll("div.control")


/** 
 * Burners status array that contains all burners status inside. It is important to check if a burner is on or off
 */

let burners_status = []


/** 
 * Controls list array that contains alll controls inside
 */

let controls_list = []


/* Functions */


/** 
 * Function used to populate the burners_status list with all burners from html
 */

function populate() {
    for (let item of burners) {
        const burner_number = item.classList[1]
        const obj = {
            burner: burner_number,
            element: item,
            status: "off"
        }
        burners_status.push(obj)
    }
    for (let item of controls) {
        const control_number = item.classList[1]
        const obj = {
            control: control_number,
            element: item
        }
        controls_list.push(obj)
    }
    addClickEvent()
}


/** 
 * Function used to add all burners the on click event to execute a function to turn on or turn off a burner
 */

function addClickEvent() {
    for (let item of burners_status) {
        item.element.addEventListener("click", turn())
    }
}


/** 
 * Function used to turn on or turn of a burner
 */

function turn() {
    // add burner status
}




/* Functions calls */

populate()