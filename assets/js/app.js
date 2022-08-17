'use strict' // This is the strict mode required

//#region JSON function

/**
 * This function must be invoked every time I try to manipulate the dom
 * @param {string} url This is my JSON Path
 */
async function getData(url) {
    /* I save my JSON link on my Response */
    const response = await fetch(url);
    let data = '';
    /* Started API Call to my JSON file */
    try {
        data = await response.json();
        // console.log(data); // I look into the console
        return data // i need to return my data
    }
    // Take the error if needed
    catch (error) {
        // console.error(error) // I look into the console
    }
    return response; // I need to return my response
}

//#endregion


// #region brand DOM manipulation

/**
 * This is a Function that i need for a try with my Async call
 */
async function brandDom() {
    // I take the dom element I want to iterate over
    const brand = document.getElementById("transform")

    // Invoke my function
    let data = await getData('./assets/data/transform.json')
    // console.log(data);

    // Now i can execute my DOM manipulation
    data.forEach(element => {
        // This is my col
        let brandDiv =
            `
            <div class="${element.col_classes}">
                <h2 class="${element.box_title_classes}">${element.box_title}</h2>
                <p class="${element.box_text_classes}">${element.box_text}</p >
                <a class="learn text-center" href="#">Learn More</a>
            </div >
            `
        brand.insertAdjacentHTML('beforeend', brandDiv)
    });
}

// Invoke my function for DOM manipulation
brandDom()
//#endregion

// #region Standout DOM manipulation
async function standoutDom() {
    // I take the dom element I want to iterate over
    const standout = document.getElementById("standout")

    // Invoke my function
    let data = await getData('./assets/data/standout.json')
    // console.log(data);

    // Now i can execute my DOM manipulation
    data.forEach(element => {
        // This is my col
        let standDiv =
            `
        <div class="${element.col_classes}">
            <h2 class="${element.box_title_classes}">${element.box_title}e</h2>
            <p class="${element.box_text_classes}">${element.box_text}</p> 
            <a class="learn" href="#">Learn More</a>
        </div>
        `
        standout.insertAdjacentHTML('beforeend', standDiv)
    })
}

// Invoke my function for DOM manipulation
standoutDom()

//#endregion

// #region Graphic Design & Photography DOM manipulation
async function graphicPhotography() {
    // I take the dom element I want to iterate over
    const items = document.getElementById("cherry_orange")

    // Invoke my function
    let data = await getData('./assets/data/graphic_design.json')
    // console.log(data);

    data.forEach(element => {
        let singleSection =
            `
            <div id="${element.col_id}" class="${element.col_classes}">
                <div class="${element.info_wrap}">
                    <h4 class="${element.title_classes}">${element.title}</h4>
                    <p class="${element.text_classes}">${element.text}</p>
                </div>
            </div>
            `
        items.insertAdjacentHTML('beforeend', singleSection)
    })
}

// Invoke my function for DOM manipulation
graphicPhotography()


//#endregion
