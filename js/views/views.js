export class Views {

    constructor(burnersList, statusText) {
        this.burnersList = burnersList;
        this.statusText = statusText;
    }

    /** 
     * Method used to turn on or turn off a burner
     */

    turnBurner(value) {
        for (let item of this.burnersList) {
            const burner_number = Number(item.burner.substring(1));
            if (value === burner_number) {
                if (item.element.classList.contains("off")) {
                    item.element.classList.remove(item.status);
                    item.status = "on";
                    item.element.classList.add(item.status);
                } else {
                    item.element.classList.remove(item.status);
                    item.status = "off";
                    item.element.classList.add(item.status);
                }
            }
        }
    }


    /** 
     * Method used to change the status text
     */

    turnStatus(value) {
        for (let item of this.statusText) {
            const status_number = Number(String(item.classList[1]).substring(1));
            if (value === status_number) {
                this.burnersList.forEach((element) => {
                    const burner_number = Number(element.burner.substring(1));
                    if (burner_number === status_number) item.innerText = element.status.substring(0, 1).toUpperCase() + element.status.substring(1).toLowerCase();
                })
            }
        }
    }


    /** 
     * Method used to turn on or turn off the oven light button
     */

    turnLight(value, oven) {
        if (value.classList.contains("light-off")) {
            value.classList.remove("light-off");
            value.classList.add("light-on");
        } else {
            value.classList.remove("light-on");
            value.classList.add("light-off");
        }
        this.turnOvenLight(oven)
    }   


    /** 
     * Method used to turn on or turn off the light inside the oven
     */

    turnOvenLight(value) {
        if (value.element.classList.contains("oven-light-on")) {
            value.element.classList.remove("oven-light-on")
        } else {
            value.element.classList.add("oven-light-on");
        }
    }

}