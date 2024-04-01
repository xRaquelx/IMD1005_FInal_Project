import Post from "./Post.js";
const questions = ["What is it?", "How does it work?", "Pricing", "Review"];
const what = `
    The ASUS Zephyrus 2021 is a flagship gaming laptop that combines powerful performance, sleek design, and cutting-edge features. 
    It is part of ASUS's renowned Zephyrus lineup, which is known for pushing the boundaries of gaming laptop design and performance.
    At the heart of the ASUS Zephyrus 2021 lies the latest generation of Intel or AMD processors, depending on the configuration. 
    These processors are paired with high-end NVIDIA GeForce RTX graphics cards, delivering unparalleled gaming performance and stunning visuals. 
    Whether you're diving into graphically demanding AAA titles or tackling creative tasks such as video editing and 3D rendering, the ASUS 
    Zephyrus 2021 is more than capable of handling the challenge.
    In terms of design, the ASUS Zephyrus 2021 boasts a sleek and portable form factor. It features ASUS's signature ErgoLift hinge,
    which lifts the keyboard at an angle for a more comfortable typing experience and improved cooling. The laptop's chassis is crafted 
    from premium materials, exuding durability and sophistication.
`;
const how = `
The ASUS Zephyrus 2021 utilizes advanced cooling technologies to ensure optimal performance even during intense gaming sessions. 
It employs a combination of vapor chamber cooling, heat pipes, and strategically placed vents to dissipate heat efficiently, 
preventing thermal throttling and maintaining consistent performance.
Furthermore, the ASUS Zephyrus 2021 offers a range of customization options through ASUS's proprietary software suite. 
Users can fine-tune performance settings, adjust RGB lighting effects, and monitor system temperatures and usage in real-time. 
This level of customization allows gamers to tailor their experience according to their preferences and optimize performance for 
different games and applications.
`;
const pricing = `
While the ASUS Zephyrus 2021 may not be the most budget-friendly option on the market, its combination of performance, 
design, and features makes it a compelling choice for gamers and power users who demand the best. 
Moreover, ASUS's reputation for reliability and customer support further enhances the value proposition of the ASUS Zephyrus 2021, 
ensuring peace of mind for users investing in this premium gaming laptop.
`;
const review = `
    I've had this computer for about two years now, and I personally really enjoyed the laptop. I found it to be a really good gaming laptop despite it's small size.
    It is very easy to carry it around for school, and can work with multiple monitors. Although there were good things, there werw a lot of downsides.
    The screen for this laptop I found to be not tht good compared to other laptops that came out during this time, and the ports on this laptop easily got damaged, and sometimes doesn't work with some of my other devices.
    For the price, I hoped that this laptop would last me longer, but unfortunately I will have to get a new laptop this summer.
    This laptop lasted me about 2 years.
`;
const answers = [what, how, pricing, review];
const laptopPost = new Post("Asus Zephyrus (2021)", "/images/Asus-laptop.png", "Image of white Asus Zephyrus 2021", "", "", questions, answers);

document.querySelector("main").appendChild(laptopPost.renderPostPage());