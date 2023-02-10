window.onload = function(){
    fillColor();
}

let inputOne = document.getElementById("inputOne");
let inputTwo = document.getElementById("inputTwo");
let sliderOne = document.getElementById("sliderOne");
let sliderTwo = document.getElementById("sliderTwo");
let sliderTrack = document.querySelector(".slider__track");
let sliderMaxValue = parseInt(document.getElementById("sliderOne").max);

const inputOnlyNumber = (input) => {
    const value = input.value;
    input.value = value.replace(/[^0-9]/g, '');
}

const changeInput = (input) => {
    if (input.value === '') { input.value = 0; }
    const value = parseInt(input.value);
    if (input.id === 'inputOne') {
        if (value > parseInt(inputTwo.value)) {
            inputOne.value = inputTwo.value;
        }
        if (value <= 0) {
            inputOne.value = 0;
        }
        sliderOne.value = inputOne.value;
    }
    if (input.id === 'inputTwo')  {
        if (value < parseInt(inputOne.value) | value <= 0) {
            inputTwo.value = inputOne.value;
        }
        if (value >= sliderMaxValue) {
            inputTwo.value = sliderMaxValue;
        }
        sliderTwo.value = inputTwo.value;
    }
    fillColor();
}

const changeSlider = (slider) => { 
    const valueOne = parseInt(sliderOne.value);
    const valueTwo = parseInt(sliderTwo.value);
    if (slider.id === 'sliderOne' && valueOne - valueTwo >= 0) {
        sliderTwo.value = valueOne;
    }
    if (slider.id === 'sliderTwo' && valueTwo - valueOne <= 0) {
        sliderOne.value = valueTwo;
    }
    inputOne.value = valueOne;
    inputTwo.value = valueTwo;
    fillColor();
}

const fillColor = () => {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}