'use strict' // This is the strict mode required

//#region Functions



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

/**
 * This is a Function that i need for a try with my Async call
 */
async function elementTry() {
    // I take the dom element I want to iterate over
    const myTry = document.getElementById("try")
    // console.log("This is my Element");
    // Invoke my function
    let data = await getData('./assets/data/standout.json')
    // console.log(data);
    // Now i can execute my DOM manipulation
    data.forEach(element => {
        // Try to Verify my elements
        let singleTask = `<li>${element.box_title}</li>`
        myTry.insertAdjacentHTML('beforeend', singleTask)
    });
}

// elementTry()


//#endregion





