class Post {
    constructor(title, img, alt, text, link) {
        this.title = title;
        this.img = img;
        this.alt = alt;
        this.text = text;
        this.link = link;
    }

    renderPostCard() {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <div class="card-img">
            <img src="${this.img}" alt="${this.alt}">
        </div>
        <div class="card-info">
            <h1>${this.title}</h1>
            <div class="card-info_text">
                <p>
                    ${this.text}
                </p>
                <div class="fade"></div>
            </div>
            <div class="card-link">
                <a href="${this.link}">Learn more!</a>
            </div>
        </div>
        `;
        return card;
    }
};

const titles = ["Nintendo Switch", "PS5", "A6400 Sony Camera", "Laptop"];
const imgs = ["/images/nintendo-switch.jpg", "/images/ps5.jpg", "/images/sony-camera.jpg"];
const alts = [
    "Imagine of Nintendo Switch controllers in the front and screen behind",
    "Imagine of PS5 controller and console",
    "Imagine of A6400 Sony Camera"
];
const texts = [];
const links = [
    "/Switch-article.html",
    "/ps5.html",
    "/sony.html",
    "laptop.html"
];

const main = document.getElementsByTagName("main");



