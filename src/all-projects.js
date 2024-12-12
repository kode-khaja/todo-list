export function aboutUs() {
    document.querySelector('#content').innerHTML = '';
    const aboutUs = document.createElement('div');
    aboutUs.innerHTML = `Welcome to Papa Vesuvio’s, where tradition meets taste in the heart of Bensonhurst, New York. Inspired by the rich culinary heritage of Naples, we bring authentic Italian flavors to your plate, crafted with love and passed down through generations.

At Papa Vesuvio’s, we believe that every meal is a celebration of family, community, and passion. From our classic hand-tossed pizzas baked to perfection in our stone oven to hearty pastas and fresh, locally sourced ingredients, we aim to deliver an unforgettable dining experience.

Whether you’re stopping by for a quick slice, a cozy family dinner, or a special celebration, Papa Vesuvio’s is your home for warm hospitality, delicious food, and the true spirit of Italian dining.

Join us at Papa Vesuvio’s, where every dish tells a story, and every visit feels like coming home. Buon appetito!`

document.querySelector('#content').appendChild(aboutUs)

}