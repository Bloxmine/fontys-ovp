// Carousel made by Levi Meijer
// github: @natuurlijklevi

// define variables
const carousel = document.querySelector('#carousel');
const arrowLeft = document.querySelector('#arrowleft');
const arrowRight = document.querySelector('#arrowright');;
const root = document.documentElement;
let currentslide = 1;

// get css variable
// @param variableName = name of the css variable
function getVariable(variableName){
    let x = getComputedStyle(root).getPropertyValue(variableName).trim();
    return x;
}

// change if arrows are active or inactive
function changeArrows(){
    if (currentslide == 1)
    {
        arrowLeft.setAttribute('class', 'inactive')
    }
    else if (currentslide == slides)
    {
        arrowRight.setAttribute('class', 'inactive')
    }
    else {
        arrowLeft.removeAttribute('class', 'inactive')
        arrowRight.removeAttribute('class', 'inactive')
    }
}

changeArrows();

// get number of slides
const slides = getVariable('--number-of-slides');

// get pixel value of css variable
// @param value = css variable value: can be in vw or em
function getPixelValue(value) {
    const vwUnit = window.innerWidth / 100;
    const emUnit = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const unit = value.includes('vw') ? vwUnit : emUnit;
    const number = parseFloat(value);

    return number * unit;
}

// when you click on the left arrow the carousel will move to the left if possible
arrowLeft.addEventListener('click', () => {
    if (currentslide == 1) {}
    else 
    {
        let cardWidth = getPixelValue(getVariable('--slide-width'));
        let gap = getPixelValue(getVariable('--slide-gap'));
        let slideWidth = cardWidth + gap;
        carousel.style.transform = "translateX(-" + (currentslide -2) * slideWidth + "px)";
        currentslide--;
        changeArrows();
    }
});

// when you click on the right arrow the carousel will move to the right if possible
arrowRight.addEventListener('click', () => {
    if (currentslide == slides) {}
    else 
    {
        let cardWidth = getPixelValue(getVariable('--slide-width'));
        let gap = getPixelValue(getVariable('--slide-gap'));
        let slideWidth = cardWidth + gap;
        carousel.style.transform = "translateX(-" + currentslide * slideWidth + "px)";
        currentslide++;
        changeArrows();
    }
});
