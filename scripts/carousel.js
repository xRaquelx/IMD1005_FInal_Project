// JS for about me page for my webdev Assignment 3
//3/27/2024


//initializing the track list
const track = document.querySelector('.carousel_track');
//initilizing an array of each img
const slides = Array.from(track.children);
//initilizing the buttons
const buttonRight = document.querySelector('.carousel_button--right');
const buttonLeft = document.querySelector('.carousel_button--left');
//initilizing navigation buttons
const navButtons = document.querySelector('.carousel_nav');
const navButton = Array.from(navButtons.children);
//getting the slide width
const slideWidth = slides[0].getBoundingClientRect().width;

//put next images in slideshow beside eachother
for(let i = 0; i < slides.length ; i++){
    slides[i].style.left = slideWidth*i + 'px';
}

//click right button, move slides right
buttonRight.addEventListener('click', e => {

    const openSlide = track.querySelector('.open_slide');
    const nextSlide = openSlide.nextElementSibling;

    const currentIndi = navButtons.querySelector('.current_indi');
    const nextIndi = currentIndi.nextElementSibling;

    moveToSlide(track,openSlide,nextSlide);
    updateNav(currentIndi,nextIndi);
    updateButtons(slides.findIndex(slide=>slide===nextSlide),buttonLeft,buttonRight,slides);
    
})

//click left button, move slides left
buttonLeft.addEventListener('click', e=>{
    const openSlide = track.querySelector('.open_slide');
    const prevSlide = openSlide.previousElementSibling;

    const currentIndi = navButtons.querySelector('.current_indi');
    const prevIndi = currentIndi.previousElementSibling;

    moveToSlide(track,openSlide,prevSlide);
    updateNav(currentIndi,prevIndi);
    updateButtons(slides.findIndex(slide=>slide===prevSlide),buttonLeft,buttonRight,slides);
})

//when i click nav indicator, go to that slide
navButtons.addEventListener('click', e =>{
    //only do event when button is clicked
    const targetIndi = e.target.closest('button');
    if(!targetIndi){return;}
    
    const currentSlide = track.querySelector('.open_slide');
    const currentDot = navButtons.querySelector('.current_indi');

    // find the dot index that equals the dot index that was clicked 
    const targetDotIndex = navButton.findIndex(dot => dot === targetIndi);
    // make the slide index equal the index clicked
    const targetSlide = slides[targetDotIndex];
    //using taget slide we can move to the desired slide
    moveToSlide(track,currentSlide,targetSlide);
    updateNav(currentDot,targetIndi);
    updateButtons(targetDotIndex,buttonLeft,buttonRight,slides);
    

})

//when the index of the dot is at the front or end it hides the side buttons
const updateButtons = (targetDotIndex,buttonLeft,buttonRight,slides) => {
    if(targetDotIndex === 0){
        buttonLeft.classList.add('is_hidden');
        buttonRight.classList.remove('is_hidden');
    }
    else if(targetDotIndex === slides.length-1){
        buttonRight.classList.add('is_hidden');
        buttonLeft.classList.remove('is_hidden');
    }
    else{
        buttonRight.classList.remove('is_hidden');
        buttonLeft.classList.remove('is_hidden');
    }
}

//puts the current_indi styleing onto the dot corrisponding to the slides
const updateNav = (currentDot,targetIndi) =>{
    //add and remove the current_indicator
    currentDot.classList.remove('current_indi');
    targetIndi.classList.add('current_indi');
}


//puts the open_slide styling onto the slide that is being seen 
const moveToSlide = (track,openSlide,targetSlide) =>{
track.style.transform = 'translatex(-'+targetSlide.style.left+')';
openSlide.classList.remove('open_slide');
targetSlide.classList.add('open_slide');
}

