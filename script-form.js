//button form
const button_form = document.querySelector('.main__button');

//warning about name
const warning_name = document.querySelector('.main__text-input--waring');

//dialog
const dialog = document.querySelector('.dialog');


//INPUTS
//range
const min_range = document.querySelector('.input-range__input-number--from');
const max_range = document.querySelector('.input-range__input-number--to');
//select
const select = document.querySelector('.main__select');
//radios
const radios = document.querySelectorAll('.main__radio');
//text input
const text_name = document.querySelector('.main__text-input--name');
//number input
const number = document.querySelector('.main__number-input--number');
//checkbox input
const checkbox = document.querySelectorAll('.main__checkbox');

//SPAN
const sp_range = document.querySelector('.dialog__result--range'); //span range
const sp_select = document.querySelector('.dialog__result--select'); // span select
const sp_radio = document.querySelector('.dialog__result--radio'); //span radio
const sp_text_name = document.querySelector('.dialog__result--text'); //span text name
const sp_number = document.querySelector('.dialog__result--number'); //span number
const sp_checkbox = document.querySelector('.dialog__result--checkbox'); //checkbox


button_form.addEventListener('click', function (event) {
    const form = document.querySelector('.main__form');

    // check if the ranges have a value
    if (form.checkValidity()) {
        let var_max_range = max_range.value === '' ? '?' : max_range.value;
        let var_min_range = min_range.value === '' ? '?' : min_range.value;

        sp_range.textContent = `от ${var_min_range} до ${var_max_range} `;

        sp_select.textContent = select.value

        radios.forEach(radio => {
            if (radio.checked) {
                sp_radio.textContent = radio.value;
            }
        })

        //check if name is written correct
        let tester_name = text_name.value.split(' ');
        if (text_name.value.length > 2 && tester_name.length === 3 ) {
            sp_text_name.textContent = text_name.value;

            //we hide the warning message
            warning_name.style.display = 'none';

            //number in container result
            sp_number.textContent = number.value;

            sp_checkbox.textContent = ''; //check box reload

            //check box content
            checkbox.forEach((box, index) => {
                switch (index) {
                    case 0:
                        if (box.checked) sp_checkbox.textContent += `Обязательный checkbox: ${box.value}`;
                        break;
                    case 1:
                        if (box.checked) sp_checkbox.textContent += `, Не обязательный checkbox: ${box.value} `;
                }
            })

            dialog.setAttribute('open', 'true'); //we open the table of results
        } else {
            //we show the warning message
            warning_name.style.display = 'inline';
        }
    } else {
        form.reportValidity()
    }
})

document.addEventListener('keydown',(event) => {
    if (event.key === 'Escape' && dialog.hasAttribute('open')) {
        dialog.removeAttribute('open');
    }
});