/* Variables */

/** 
 * Burners list that get all burners from html
 */

const burners = document.querySelectorAll("div.burner")


/** 
 * Controls list that get all controls from html
 */

const controls = document.querySelectorAll("button.control")


/** 
 * Status list that het all text status from controls
 */

let status_elements = document.querySelectorAll("p.status")


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
    for (let item of controls_list) {
        item.element.addEventListener('click', () => turn(item))
    }
}


/** 
 * Function used to turn on or turn of a burner
 */

function turn(value) {
    const control_number = Number(value.control.substring(1))
    for (let item of burners_status) {
        const burner_number = Number(item.burner.substring(1))
        if (control_number === burner_number) {
            if (item.element.classList.contains("off")) {
                item.element.classList.remove(item.status)
                item.status = "on"
                item.element.classList.add(item.status)
            } else {
                item.element.classList.remove(item.status)
                item.status = "off"
                item.element.classList.add(item.status)
            }
        }
    }
    for (let item of status_elements) {
        const status_number = Number(String(item.classList[1]).substring(1))
        if (control_number === status_number) {
            burners_status.forEach((element) => {
                const burner_number =Number(element.burner.substring(1))
                if (burner_number === status_number) item.innerText = element.status.substring(0,1).toUpperCase() + element.status.substring(1).toLowerCase()
            })
        }
    }

}


/* Functions calls */

populate()