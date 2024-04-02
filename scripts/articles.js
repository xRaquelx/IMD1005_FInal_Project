import Post from "./Post.js";

const temp = `xyz`;
const ninSwitch = `In the realm of gaming, few names resonate as strongly as Nintendo, a company renowned for its 
innovative consoles and beloved franchises. Among its many creations, the Nintendo Switch stands out as a unique 
hybrid gaming system that offers versatility, convenience, and a diverse gaming experience for players of all ages.`;

const camera = `In the ever-evolving world of photography, Sony has consistently been at the forefront of innovation, 
offering cutting-edge technology in compact and powerful packages. The Sony A6400 is a prime example of this 
commitment, boasting an impressive array of features that cater to both enthusiasts and professionals alike. 
From its advanced autofocus system to its sleek design, the A6400 is a versatile tool that promises to elevate your photography experience.`;

const laptop = `In the realm of gaming laptops, ASUS has long been synonymous with cutting-edge technology and innovation. 
With the release of the ASUS Zephyrus 2021, the Taiwanese tech giant once again asserts its dominance in the gaming laptop market. 
In this article, we delve into what makes the ASUS Zephyrus 2021 stand out, how it works, and its pricing.`;

const ps5 = `One of the biggest gaming platforms in the console gaming world is PlayStation. With first of their most revolutionary 
famous consoles, the PlayStation 2 and now the PlayStation 5 (PS5). The PS5 has brought new advancement in gameplay, visual graphics, 
and physical and digital features.`;

const ipad = `The iPad Pro is a line of high-end tablet computers designed, developed, and marketed by Apple Inc. 
It's positioned as a more powerful and versatile alternative to the standard iPad, aimed particularly at professionals 
and creatives who demand more performance for tasks such as graphic design, video editing, and multitasking.`;

const titles = ["Nintendo Switch", "PS5", "A6400 Sony Camera", "Laptop", "iPad"];
const imgs = ["/images/nintendo-switch.jpg", "/images/ps5.jpg", "/images/sony-camera.jpg", "/images/Asus-laptop.png", ""];
const alts = [
    "Image of Nintendo Switch controllers in the front and screen behind",
    "Image of PS5 controller and console",
    "Image of A6400 Sony Camera",
    "Image of Asus Laptop 2021",
    "Image of iPad Pro"
];
const texts = [
    ninSwitch, 
    ps5, 
    camera, 
    laptop,
    ipad
];
const links = [
    "/Switch-article.html",
    "/ps5.html",
    "/camera.html",
    "/laptop.html",
    ""
];


const main = document.querySelector("main");

titles.forEach((title, i) => {  
    main.appendChild((new Post(title, imgs[i], alts[i], texts[i], links[i])).renderPostCard());
});

