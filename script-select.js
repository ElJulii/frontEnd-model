//input select

const inputSelect = document.querySelector('.main__select');

//input option
const options = document.querySelectorAll('.main__option-item');

options.forEach((option, index) =>  {
    option.addEventListener('click', () => {
        switch (index) {
            case 0:
                inputSelect.value = 'Vite'
                break;
            case 1:
                inputSelect.value = 'Webpack';
                break;
            case 2:
                inputSelect.value = 'Gulp';
                break;
        }
        inputSelect.dispatchEvent(new Event('input', {bubbles: true}))
    })

    inputSelect.dispatchEvent(new Event('input', { bubbles: true }));

    //hidde the list
    document.querySelector('.main__options-list').style.visibility = 'hidden';
    document.querySelector('.main__options-list').style.opacity = '0';
    document.querySelector('.main__options-list').style.pointerEvents = 'none';

    // no focus
    inputSelect.blur();
})


// open
inputSelect.addEventListener('focus', () => {
    document.querySelector('.main__options-list').style.visibility = 'visible';
    document.querySelector('.main__options-list').style.opacity = '1';
    document.querySelector('.main__options-list').style.pointerEvents = 'auto';
});

// close
document.addEventListener('click', (event) => {
    if (!document.querySelector('.main__select-input').contains(event.target)) {
        document.querySelector('.main__options-list').style.visibility = 'hidden';
        document.querySelector('.main__options-list').style.opacity = '0';
        document.querySelector('.main__options-list').style.pointerEvents = 'none';
    }
});