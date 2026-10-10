// TRADITION CARDS
import {traditions} from "../data/traditions.mjs";
const traditionCard = document.querySelector("#traditionCards");
traditions.forEach((traditions) => {
    const card = document.createElement("article");
    card.innerHTML = `
    <h3>${traditions.name}</h3>
    <figure>
        <img src="${traditions.imageUrl}"
        alt="${traditions.name}"
        width="300"
        height="150"
        loading="lazy">
    </figure>
    <p>${traditions.description}</p>
    <button><a href="${traditions.url}" target="_blank" rel="noopener">Learn More</a></button>
    `;

    traditionCard.appendChild(card);
})