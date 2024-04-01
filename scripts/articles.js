import Post from "./Post.js";

const titles = ["Nintendo Switch", "PS5", "A6400 Sony Camera", "Laptop"];
const imgs = ["/images/nintendo-switch.jpg", "/images/ps5.jpg", "/images/sony-camera.jpg", ""];
const alts = [
    "Imagine of Nintendo Switch controllers in the front and screen behind",
    "Imagine of PS5 controller and console",
    "Imagine of A6400 Sony Camera",
    ""
];

const texts = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Aliquid doloremque sed impedit est eos! 
Maxime aperiam inventore impedit culpa aspernatur doloribus dignissimos molestiae 
repudiandae ipsa perspiciatis unde magni, in quisquam beatae harum possimus rem dolores 
ratione sequi excepturi fugiat, vel facere quidem minus! Ad deserunt sequi temporibus 
cumque officiis dolores nemo quia velit laudantium iusto accusamus id porro veritatis 
expedita iste suscipit quos amet assumenda veniam, inventore et eius similique dolorem!`;

const links = [
    "/Switch-article.html",
    "/ps5.html",
    "/sony.html",
    "/laptop.html"
];

const main = document.querySelector("main");

titles.forEach((title, i) => {  
    main.appendChild((new Post(title, imgs[i], alts[i], texts, links[i])).renderPostCard());
});

