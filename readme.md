# Sunnyside agency landing page

This project was a challenge accepted on the `Frontend Mentor` website.

## **Tag head**

Inside the `head` tag there are all the links necessary for the page `style`. The links are:

-  Bootstrap CDN Links.
-  FontAwesome CDN Links.
-  My main stylesheet.
-  Link to the Fraunces font taken from Google Fonts

## **Script Files**

At the bottom of the page there are `links` to the various `script` files. The links are:

-  JQuery script
-  Bootstrap CDN Links
-  FontAwesome
-  My main script files.

## **app.js**

This is my main `script file` where all the `DOM manipulations` applied to my markup reside inside.
In this case, to implement all the `cards` or the elements that have `repeated themselves`, I used `async functions` which, by calling `Fetch` to the prepared `JSON files`.
This below is an example of a `DOM manipulation` created in my `script file` :

```js
/**
 * This function must be invoked every time I try to manipulate the dom
 * @param {string} url This is my JSON Path
 */
async function getData(url) {
   /* I save my JSON link on my Response */
   const response = await fetch(url);
   let data = "";
   /* Started API Call to my JSON file */
   try {
      data = await response.json();
      // console.log(data); // I look into the console
      return data; // i need to return my data
   } catch (error) {
      // Take the error if needed
      // console.error(error) // I look into the console
   }
   return response; // I need to return my response
}

async function brandDom() {
   // I take the dom element I want to iterate over
   const brand = document.getElementById("transform");

   // Invoke my function
   let data = await getData("./assets/data/transform.json");
   // console.log(data);

   // Now i can execute my DOM manipulation
   data.forEach((element) => {
      // This is my col
      let brandDiv = `
            <div class="${element.col_classes}">
                <h2 class="${element.box_title_classes}">${element.box_title}</h2>
                <p class="${element.box_text_classes}">${element.box_text}</p >
                <a class="learn text-center" href="#">Learn More</a>
            </div >
            `;
      brand.insertAdjacentHTML("beforeend", brandDiv);
   });
}

// Invoke my function for DOM manipulation
brandDom();
```

The whole file is divided into `regions`, in order to keep the code `cleaner and tidier`.

## **data folder**

Inside this folder are all the `JSON files` that I call in the manipulation of the `DOM`.

## **CSS Stylesheet**

In this case i only used a single CSS style sheet. To keep it `neat and clean`, i just had to divide everything into `region`s and, where I could, I used common classes by `refactoring`.

## **readme**

All the starter code readme files have been stored in the `./Readme` folder.

The `results` of my work are present in the `./assets/results` folder.
