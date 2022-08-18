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
            <h2 class="${element.box_title_classes}">${element.box_title}</h2>
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

//#region Testimonials Cards DOM manipulation
async function testimonialsCards() {
    // I take the dom element I want to iterate over
    const cardsWrapper = document.getElementById("testimonialsCards")
    // Invoke my function
    let data = await getData('./assets/data/testimonial.json')

    data.forEach(element => {
        let singleTestimonial =
            `
            <div class="${element.col_classes}">
                <div class="${element.card_classes}">
                    <img class="${element.pic_class}" src="${element.profile_pic}" alt="${element.pic_alt}">
                    <p class="text-center testimonial_text">${element.testimonial_text}</p>
                    <div class="text-center">
                        <h5 class="testimonial_person">${element.testimonial_person}</h5>
                        <h6 class="testimonial_role">${element.testimonial_role}</h6>                    
                    </div>
                </div>
            </div>
            `
        cardsWrapper.insertAdjacentHTML('beforeend', singleTestimonial)
    })
}
// Invoke my function for DOM manipulation
testimonialsCards()

//#endregion

//#region Footer Cards DOM manipulation
async function cardsOfFooter() {
    // I take the dom element I want to iterate over
    const cards_footer = document.getElementById("footerCards")

    // Invoke my function
    let data = await getData('./assets/data/footer_cards.json')
    // console.log(data);

    data.forEach(element => {
        let singleFooter =
            `
            <div id="${element.id}" class="${element.classes}"></div>
            `
        cards_footer.insertAdjacentHTML('beforeend', singleFooter)
    })
}
// Invoke my function for DOM manipulation
cardsOfFooter()
//#endregion

//#region Footer Links DOM manipulation
async function footerLinks() {
    // I take the dom element I want to iterate over
    const footer_links = document.getElementById("footerLinks")

    // Invoke my function
    let data = await getData('./assets/data/footerLinks.json')
    // console.log(data);

    data.forEach(element => {
        let singleLink =
            `
                <a class="${element.classes}" href="${element.ref}">${element.text}</a>
            `
        footer_links.insertAdjacentHTML('beforeend', singleLink)
    })
}

// Invoke my function for DOM manipulation
footerLinks()
//#endregion

//#region Footer Icons DOM manipulation
async function footerIcons() {
    // I take the dom element I want to iterate over
    const footer_icons = document.getElementById("footerIcons")

    // Invoke my function
    let data = await getData('./assets/data/footerIcons.json')
    // console.log(data);

    data.forEach(element => {
        let singleIcon =
            `
            <a class="${element.a_class}" href="${element.a_ref}">
                <i class="${element.icon}"></i>
            </a>
            `
        footer_icons.insertAdjacentHTML('beforeend', singleIcon)
    })
}
// Invoke my function for DOM manipulation
footerIcons()
//#endregion