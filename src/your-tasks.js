export let pageLoadElements = window.addEventListener('load', (event) => {
   const homeElements = document.querySelector('#content');
   const descText = document.createTextNode('Finest Representation of the Most Delectable Cuisine...')
   const imgHome = document.createElement('img');
   imgHome.src = "https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg?s=612x612&w=0&k=20&c=8U3mrgWsuB7pB8axtGj89MXRkHDKodEli9F6wKgPT4A=";
   const restaurantName = document.createElement('h1');
   restaurantName.innerHTML = `Papa Vesuvio's`;

   document.body.appendChild(homeElements);
   homeElements.appendChild(descText)
   homeElements.appendChild(imgHome)
   homeElements.appendChild(restaurantName)
   
})
console.log("pageLoadElements initialized:", pageLoadElements);


export function home() {
    document.querySelector('#content').innerHTML = '';
    const homeElements = document.querySelector('#content');
    const descText = document.createTextNode('Finest Representation of the Most Delectable Cuisine...')
    const imgHome = document.createElement('img');
    imgHome.src = "https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg?s=612x612&w=0&k=20&c=8U3mrgWsuB7pB8axtGj89MXRkHDKodEli9F6wKgPT4A=";
    const restaurantName = document.createElement('h1');
    restaurantName.innerHTML = `Papa Vesuvio's`;
 
    document.body.appendChild(homeElements);
    homeElements.appendChild(descText)
    homeElements.appendChild(imgHome)
    homeElements.appendChild(restaurantName)
 }
