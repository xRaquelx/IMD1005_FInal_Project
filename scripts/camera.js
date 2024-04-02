import Post from "./Post.js";

const questions = ["What is it?", "How does it work?", "Pricing"];
const what = `
    In the ever-evolving world of photography, Sony has consistently been at the forefront of innovation, 
    offering cutting-edge technology in compact and powerful packages. The Sony A6400 is a prime example of this commitment, 
    boasting an impressive array of features that cater to both enthusiasts and professionals alike. 
    From its advanced autofocus system to its sleek design, the A6400 is a versatile tool that promises to 
    elevate your photography experience.
`;
const how = `
    At the heart of the Sony A6400 is a 24.2-megapixel APS-C Exmor CMOS sensor, coupled with the latest BIONZ X image processor. 
    This combination allows for stunning image quality with exceptional detail and clarity, even in low-light conditions. 
    Additionally, the A6400 offers an impressive ISO range of 100-32000 (expandable to 102400), ensuring superior performance 
    in various lighting situations.

    One of the standout features of the A6400 is its autofocus system. With 425 phase-detection points covering approximately 84% 
    of the frame, the camera delivers lightning-fast and accurate autofocus performance. This makes it ideal for capturing fast-moving 
    subjects, such as wildlife or sports events. Moreover, the real-time Eye AF and Tracking AF capabilities further enhance focus 
    accuracy, ensuring that your subjects are always sharp and in focus.

    In terms of handling, the A6400 features a compact and lightweight body, making it perfect for photographers on the go. 
    The ergonomic design includes a comfortable grip and intuitive controls, allowing for seamless operation even in 
    challenging shooting conditions. Additionally, the tiltable LCD touchscreen enables easy framing and navigation, 
    while the high-resolution electronic viewfinder offers a clear and immersive viewing experience.
`;
const price = `
    The Sony A6400 is competitively priced, offering exceptional value for money given its feature set. Pricing may vary depending 
    on the region and included accessories, but it generally falls within the mid-range segment of the mirrorless camera market.

    As for availability, the A6400 can be found at authorized Sony retailers worldwide, including major electronics stores 
    and online platforms. Whether you're purchasing in-store or online, be sure to check for special promotions or bundled deals 
    that may offer additional savings or accessories.
`;
const answers = [what, how, price];
const laptopPost = new Post("Exploring the Sony A6400: A Compact Powerhouse in the Mirrorless Realm", "/images/sony-camera.jpg", "Image of Sony A6400", "", "", questions, answers);

document.querySelector("main").appendChild(laptopPost.renderPostPage());