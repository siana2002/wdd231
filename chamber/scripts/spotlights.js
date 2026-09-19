const spotlightCards = document.querySelector("#spotlightCards");

async function getMembers() {
    try{
        const response = await fetch("data/members.json");
        const data = await response.json();

        displaySpotlights(data);
    } catch (error) {
        console.log("Could not load members:", error);
    }
}

function displaySpotlights(members) {
    const qualifiedMembers = members.filter(
        member => member.membershipLevel === 2 || member.membershipLevel === 3
    );

    qualifiedMembers.sort(() => Math.random() - 0.5);
    qualifiedMembers.slice(0, 3).forEach(member => {

        const card = document.createElement("article");
        card.classList.add("spotlight-content");
        let level;

        if (member.membershipLevel === 3) {
            level = "Gold Member";
        } else{
            level = "Silver Member";
        }

        card.innerHTML = `
        <img src="${member.imageUrl}"
             alt="${member.businessName} logo"
             width="150"
             height="100">
        <h3>${member.businessName}</h3>
        <p>Phone: ${member.phone}</p>
        <p>Address: ${member.email}</p>
        <p>Membership: ${level}</p>
        <a href="${member.url}" target="_blank">Visit Website</a>
        `;

        spotlightCards.appendChild(card);
    });
}

getMembers();