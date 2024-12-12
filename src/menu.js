// export const menu = document.querySelector('#menu');
// const menuContent = document.querySelector('#content');
// document.body.appendChild(menu)
// menu.addEventListener('click', (event) => {

    
    
    //     const menuHeader = document.createElement('h1');
    //     menuHeader.innerHTML = `Our Menu`
    //     menu.appendChild(menuContent)
    //     menuContent.appendChild(menuHeader)
    // })
    //     if(pageLoadElements) {
    // for (const key in pageLoadElements) {
    //     if (pageLoadElements[key]?.remove) {
    //         pageLoadElements[key].remove();
    //     } else {
    //         pageLoadElements[key] = null
    //     }
    //     }
    // }
    import { pageLoadElements } from "./pageload.js";
    
export function getMenu () {
 document.querySelector('#content').innerHTML = '';
 const menuContent = document.createElement('div');
 const menuText = document.createTextNode('Our Menu')
 const imgMenu1 = document.createElement('img')
 imgMenu1.src = `https://media.glamour.com/photos/5f06117014335481a57dc463/master/w_1600%2Cc_limit/Pasta%2520Dish.jpg`
 imgMenu1.height = 600;
 imgMenu1.width = 500;
 const itemText = document.createElement('text')
 itemText.innerHTML = (`<p>Papa's Special Rigatoni</p><p>Our Special</p><p>Handmade entirely by Chef Vesuvio, with his undivided care. We pride our establishment on this dish by Chef Vesuvio so much so his Highness demands you kill yourself if your heart and tongue feels otherwise.<br>Seppuku assets provided in silverware.`)
 document.querySelector('#content').appendChild(menuContent)
 menuContent.appendChild(menuText)
 menuContent.appendChild(imgMenu1)
 menuContent.appendChild(itemText)

}