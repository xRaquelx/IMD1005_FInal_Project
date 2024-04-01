import Post from "./Post.js";
const questions = ["What is it?", "How does it work?", "Pricing"];
const someShit = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Aliquid doloremque sed impedit est eos! 
    Maxime aperiam inventore impedit culpa aspernatur doloribus dignissimos molestiae 
    repudiandae ipsa perspiciatis unde magni, in quisquam beatae harum possimus rem dolores 
    ratione sequi excepturi fugiat, vel facere quidem minus! Ad deserunt sequi temporibus 
    cumque officiis dolores nemo quia velit laudantium iusto accusamus id porro veritatis 
    expedita iste suscipit quos amet assumenda veniam, inventore et eius similique dolorem!
`;
const answers = [someShit, someShit, someShit];
const laptopPost = new Post("Asus Zephyrus (2021)", "/images/Asus-laptop.png", "Image of white Asus Zephyrus 2021", "", "", questions, answers);

document.querySelector("main").appendChild(laptopPost.renderPostPage());