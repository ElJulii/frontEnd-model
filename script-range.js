//inputs range
const input_min = document.querySelector('.input-range__range--min');
const input_max = document.querySelector('.input-range__range--max');

//inputs number
const input_from = document.querySelector('.input-range__input-number--from');
const input_to = document.querySelector('.input-range__input-number--to');

// if the min value is longer that max then the min will always equal to the max value
input_min.addEventListener('input', () => {
    if (parseInt(input_min.value) > parseInt(input_max.value)) {
        input_min.value = input_max.value;
    }
    input_from.value = input_min.value;
})

// if the max value is shorter that min then the min will always equal to the min value
input_max.addEventListener('input', () =>  {
    if (parseInt(input_max.value) < parseInt(input_min.value)) {
        input_max.value = input_min.value;
    }
    input_to.value = input_max.value;
})

//the next ones are the same with the two others up

input_from.addEventListener('input', () => {
    if (parseInt(input_from.value) > parseInt(input_to.value)) {
        input_from.value = input_to.value;
    }
    if (parseInt(input_from.value) > 150) {
        input_from.value = 149;
    }
    input_min.value = input_from.value
})

input_to.addEventListener('input', () => {
    if (parseInt(input_to.value) < parseInt(input_from.value)) {
        input_to.value = input_from.value;
    }
    if (parseInt(input_to.value) > 150) {
        input_to.value = 150;
    }
    input_max.value = input_to.value;
})