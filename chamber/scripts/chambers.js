const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");

    if(navigation.classList.contains("show")){
        menuButton.textContent = "x";
    } else{
        menuButton.textContent = "☰";
    }
});

async function getBusinesses() {
    try{
        const response = await fetch("data/members.json");
        const data = await response.json();

        displayBusinesses(data);
    }catch (error) {
        console.log("Could not load the businesses: ", error);
    }
}

function getMemberLevel(level) {
    if (level === 3) {
        return "GOLD MEMBER";
    }

    if (level === 2) {
        return "SILVER MEMBER";
    }

    return "MEMBER";
}

const businessCards = document.querySelector('#businessCards');
function displayBusinesses(data) {
    businessCards.innerHTML = "";

    data.forEach((business) => {

        const card = document.createElement("section");
        card.classList.add("course-card");

        const name = document.createElement("h2")
        name.textContent = business.businessName;

        const tagline = document.createElement("h3")
        tagline.textContent = business.tagLine;

        const email = document.createElement("p")
        email.textContent = `EMAIL: ${business.email}`;

        const phone = document.createElement("p")
        phone.textContent = `PHONE: ${business.phone}`;

        const level = document.createElement("p")
        level.textContent = getMemberLevel(business.membershipLevel);

        const url = document.createElement("p")
        url.textContent = `URL: ${business.url}`;

        const image = document.createElement("img");
        image.src = business.imageUrl;
        image.alt = business.businessName;
        image.loading = "lazy";

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(tagline);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(level);
        card.appendChild(url);

        businessCards.appendChild(card);
    })
}

getBusinesses();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    businessCards.classList.add("grid");
    businessCards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    businessCards.classList.add("list");
    businessCards.classList.remove("grid");
});