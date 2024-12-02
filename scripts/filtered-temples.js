
function toggleMenu(){
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
}


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Buenos Aires",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, January 17-19",
      area: 30659,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-2970.jpg"
    },
    {
      templeName: "Manila Philippines",
      location: "Manila, Philippines",
      dedicated: "1984, September 25-27",
      area: 26683,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-7439.jpg"
    },
    {
      templeName: "Columbus Ohio",
      location: "Ohio, United States",
      dedicated: "1999, September 4-5",
      area: 11745,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/columbus-ohio-temple/columbus-ohio-temple-36113.jpg"
      }
    ];

createTempleCard(temples);
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

function getYear(dateString) {
    const dateParts = dateString.split(", ");
    const year = dateParts[0];
    return parseInt(year);
}

function filterOldTemples(temples, year){
    return temples.filter(temple => getYear(temple.dedicated) < year);
}
function filterNewTemples(temples, year) {
    return temples.filter(temple =>getYear(temple.dedicated) >= year);
}
function filterLargeTemples(temples, size) {
    return temples.filter(temple => temple.area > size);
}

function filterSmallTemples(temples, size) {
    return temples.filter(temple => temple.area <= size);
}
oldLink.addEventListener("click", () => {
    const filteredOldTemples = filterOldTemples(temples, 2000);
    createTempleCard(filteredOldTemples); 
});

newLink.addEventListener("click", () => {
    const filteredNewTemples = filterNewTemples(temples, 2000);
    createTempleCard(filteredNewTemples); 
});
largeLink.addEventListener("click", () => {
    const filteredLargeTemples = filterLargeTemples(temples, 50000);
    createTempleCard(filteredLargeTemples); 
});
smallLink.addEventListener("click", () => {
    const filteredLargeTemples = filterLargeTemples(temples, 50000);
    createTempleCard(filteredSmallTemples); 
});
function createTempleCard(templesList){
    const imageContainer = document.querySelector(".image-Container");
    imageContainer.innerHTML = "";

    templesList.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");
    
    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);
    
    document.querySelector(".image-Container").appendChild(card);

});
}




  