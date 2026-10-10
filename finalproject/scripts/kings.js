// KING CARDS
const kingCards = document.querySelector("#kings");

async function getKings() {
    try{
        const response = await fetch("data/kings.json");
        
        if (!response.ok) {
            throw new Error("Could not load kings data");
        }

        const kings = await response.json();

        kings.forEach((king) => {
            const card = document.createElement("article");
            card.innerHTML = `
                <h3>${king.name}</h3>
                <figure>
                    <img src="${king.imageUrl}"
                    alt="${king.name}"
                    width="300"
                    height="150"
                    loading="lazy">
                </figure>
                <p>${king.description}</p>
                <p>REIGN: ${king.life}</p>
                <p>REGION: ${king.region}</p>
                <button>
                    <a href="#" class="modal-link" data-modal="${king.modalId}">Learn More</a>
                </button>
            `;

            kingCards.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading kings:", error);
        kingCards.textContent = "Unable to load the kings. Please try again later.";
    }
}

getKings();

// KING MODALS
document.addEventListener("click", (event) => {
    const link = event.target.closest(".modal-link");

    if (link) {
        event.preventDefault();

        const modalId = link.dataset.modal;
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.showModal();
        }
    }

    if (event.target.classList.contains("close-modal")) {
        event.target.closest("dialog").close();
    }
});