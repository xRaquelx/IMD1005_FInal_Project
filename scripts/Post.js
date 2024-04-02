export default class Post {
    constructor(title, img, alt, text, link, q, a) {
        this.title = title;
        this.img = img;
        this.alt = alt;
        this.text = text;
        this.link = link;
        this.q = q != null? [...q]: null;
        this.a = a != null? [...a]: null;
    }

    renderPostCard() {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <div class="card-img">
            <a href="${this.link}"> <img src="${this.img}" alt="${this.alt}"> </a>
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

    renderPostPage() {
        const page = document.createElement("div");
        page.className = "page-container";
        page.innerHTML = `
            <div class="page-header">
                <h1>${this.title}</h1>
                <div class="page-img">
                    <img src="${this.img}" alt="${this.alt}">
                </div>
            </div>
        `;
        const pageInfo = document.createElement("div");
        pageInfo.className = "page-info";
        this.q.forEach((value, i) => pageInfo.appendChild(Post.renderQuestion(value, this.a[i])));
        page.appendChild(pageInfo);
        return page;
    }

    static renderQuestion(q, a) {
        const question = document.createElement("div");
        question.innerHTML= `
            <h2>${q}</h2>
            <p>${a}</p>
        `;
        return question;
    }
};