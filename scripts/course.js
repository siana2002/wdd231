const businesses = [
    {
        businessName: "SNA Enterprises",
        tagLine: "We can do it",
        email: "info@gmail.com",
        phone: "111-111-111",
        url: "mybusiness.com",
        imageUrl: "images/sna.png"
    },
    {
        businessName: "CDL Enterprises",
        tagLine: "You name it, we make it",
        email: "info@gmail.com",
        phone: "222-222-222",
        url: "mybusiness.com",
        imageUrl: "images/cdl.webp"
    },
    {
        businessName: "ABC Enterprises",
        tagLine: "Better Together",
        email: "info@gmail.com",
        phone: "333-333-333",
        url: "mybusiness.com",
        imageUrl: "images/abc.png"
    },
    {
        businessName: "Modeva",
        tagLine: "Your style, your statement",
        email: "info@gmail.com",
        phone: "444-444-444",
        url: "mybusiness.com",
        imageUrl: "images/modeva.jpeg"
    },
    {
        businessName: "Brew & Bean",
        tagLine: "Good coffee. Good moments",
        email: "info@gmail.com",
        phone: "555-555-555",
        url: "mybusiness.com",
        imageUrl: "images/brewandbean.jpeg"
    },
    {
        businessName: "LuxeLine",
        tagLine: "Simple. Stylish. You",
        email: "info@gmail.com",
        phone: "666-666-666",
        url: "mybusiness.com",
        imageUrl: "images/luxeline.jpeg"
    },
    {
        businessName: "CoreX",
        tagLine: "Strength starts here",
        email: "info@gmail.com",
        phone: "777-777-777",
        url: "mybusiness.com",
        imageUrl: "images/coreX.jpg"
    },
    {
        businessName: "Vitality",
        tagLine: "Feel strong. Live fully",
        email: "info@gmail.com",
        phone: "888-888-888",
        url: "mybusiness.com",
        imageUrl: "images/vitality.png"
    },
    {
        businessName: "Elevate",
        tagLine: "Built for better business",
        email: "info@gmail.com",
        phone: "999-999-999",
        url: "mybusiness.com",
        imageUrl: "images/elevate.png"
    },
]

const email = document.createElement("p")
        email.textContent = `EMAIL: ${business.email}`;

        const phone = document.createElement("p")
        phone.textContent = `PHONE: ${business.phone}`;

        const url = document.createElement("p")
        url.textContent = `URL: ${business.url}`;

        const image = document.createElement("img");
        image.src = business.imageUrl;
        image.alt = business.businessName;
        image.loading = "lazy";

        card.appendChild(businessName);
        card.appendChild(tagLine);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(image);

        businessCards.appendChild(card);
    })
}

displayBusinesses(businesses);

<div class="wdd"><p>WDD 130</p>
            <div class="wdd"><p>WDD 131</p></div>
            <div class="wdd"><p>WDD 231</p></div>
            </div>