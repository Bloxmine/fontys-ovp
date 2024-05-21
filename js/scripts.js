<<<<<<< HEAD
const slideshow = document.querySelector('#slideshow');
const arrowLeft = document.querySelector('#arrowleft');
const arrowRight = document.querySelector('#arrowright');;
const root = document.documentElement;
let currentslide = 1;

function getVariable(variableName){
    let x = getComputedStyle(root).getPropertyValue(variableName).trim();
    return x;
}

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

const slides = getVariable('--number-of-slides');

function getPixelValue(value) {
    const vwUnit = window.innerWidth / 100;
    const emUnit = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const unit = value.includes('vw') ? vwUnit : emUnit;
    const number = parseFloat(value);

    return number * unit;
}

arrowLeft.addEventListener('click', () => {
    if (currentslide == 1) {}
    else 
    {
        let cardWidth = getPixelValue(getVariable('--slide-width'));
        let gap = getPixelValue(getVariable('--slide-gap'));
        let slideWidth = cardWidth + gap;
        slideshow.style.transform = "translateX(-" + (currentslide -2) * slideWidth + "px)";
        currentslide--;
        changeArrows();
    }
});

arrowRight.addEventListener('click', () => {
    if (currentslide == slides) {}
    else 
    {
        let cardWidth = getPixelValue(getVariable('--slide-width'));
        let gap = getPixelValue(getVariable('--slide-gap'));
        let slideWidth = cardWidth + gap;
        slideshow.style.transform = "translateX(-" + currentslide * slideWidth + "px)";
        currentslide++;
        changeArrows();
    }
});
=======
const slideshow = document.querySelector('#slideshow');
const arrowLeft = document.querySelector('#arrowleft');
const arrowRight = document.querySelector('#arrowright');;
const root = document.documentElement;
let currentslide = 1;

function getVariable(variableName){
    let x = getComputedStyle(root).getPropertyValue(variableName).trim();
    return x;
}

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

const slides = getVariable('--number-of-slides');

function getPixelValue(value) {
    const vwUnit = window.innerWidth / 100;
    const emUnit = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const unit = value.includes('vw') ? vwUnit : emUnit;
    const number = parseFloat(value);

    return number * unit;
}

arrowLeft.addEventListener('click', () => {
    if (currentslide == 1) {}
    else 
    {
        let cardWidth = getPixelValue(getVariable('--slide-width'));
        let gap = getPixelValue(getVariable('--slide-gap'));
        let slideWidth = cardWidth + gap;
        slideshow.style.transform = "translateX(-" + (currentslide -2) * slideWidth + "px)";
        currentslide--;
        changeArrows();
    }
});

arrowRight.addEventListener('click', () => {
    if (currentslide == slides) {}
    else 
    {
        let cardWidth = getPixelValue(getVariable('--slide-width'));
        let gap = getPixelValue(getVariable('--slide-gap'));
        let slideWidth = cardWidth + gap;
        slideshow.style.transform = "translateX(-" + currentslide * slideWidth + "px)";
        currentslide++;
        changeArrows();
    }
});
>>>>>>> origin/levi
