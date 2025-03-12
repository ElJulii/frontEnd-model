//inputs range
const input_min = document.querySelector('.input-range__range--min');
const input_max = document.querySelector('.input-range__range--max');

//inputs number
const input_from = document.querySelector('.input-range__input-number--from');
const input_to = document.querySelector('.input-range__input-number--to');

//tracker
const tracker = document.querySelector('.main__slider-track');

//max value
const sliderMaxValue = document.querySelector('.input-range__range--min').max;


//On load page
window.onload = function () {
    minSlider();
    maxSlider();
}

// if the min value is longer that max then the min will always equal to the max value
input_min.addEventListener('input', minSlider);

// if the max value is shorter that min then the min will always equal to the min value
input_max.addEventListener('input', maxSlider);

//the next ones are the same with the two others up

input_from.addEventListener('input', () => {
    if (parseInt(input_from.value) > parseInt(input_to.value)) {
        input_from.value = input_to.value;
    }
    if (parseInt(input_from.value) > 150) {
        input_from.value = 149;
    }
    input_min.value = input_from.value;
    fillColor();
})

input_to.addEventListener('input', () => {
    if (parseInt(input_to.value) < parseInt(input_from.value)) {
        input_to.value = input_from.value;
    }
    if (parseInt(input_to.value) > 150) {
        input_to.value = 150;
    }
    input_max.value = input_to.value;
    fillColor();
})

function fillColor() {
    let percent1 = (min_range.value / sliderMaxValue) * 100;
    let percent2 = (max_range.value / sliderMaxValue) * 100;
    tracker.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

function minSlider() {
    if (parseInt(input_min.value) > parseInt(input_max.value)) {
        input_min.value = input_max.value;
    }
    input_from.value = input_min.value;
    fillColor();
}

function maxSlider() {
    if (parseInt(input_max.value) < parseInt(input_min.value)) {
        input_max.value = input_min.value;
    }
    input_to.value = input_max.value;
    fillColor();
}