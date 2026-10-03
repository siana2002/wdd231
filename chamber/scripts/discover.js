import { attractions } from "../data/discover.mjs";

const discoverCard = document.querySelector("#discoverCards");
attractions.forEach((attractions) => {
    const card = document.createElement("article");
    card.innerHTML = `
    <h2>${attractions.siteName}</h2>
    <figure>
        <img src="${attractions.imageUrl}" alt="${attractions.name}" width="300" height="200">
    </figure>
    <address>${attractions.address}</address>
    <p>${attractions.description}</p>
    <button>Learn More</button>
    `;

    discoverCard.appendChild(card);
})

// VISIT MESSAGE SCRIPT
const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeDifference = currentVisit - Number(lastVisit);
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);