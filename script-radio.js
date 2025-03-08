// radio that will be edited
const customCheckboxes = document.querySelectorAll('.custom-radio');

customCheckboxes.forEach(checkbox => {
    const checkboxInput = checkbox.querySelector('.main__radio');
    const checkboxButton = checkbox.querySelector('.custom-radio-button');

    // we hide the current checkbox
    checkboxInput.style.display = 'none';
    checkbox.style.marginRight = '20px';

    // We edit the box
    checkboxButton.style.display = 'inline-block';
    checkboxButton.style.width = '20px';
    checkboxButton.style.height = '20px';
    checkboxButton.style.borderRadius = '50%';
    checkboxButton.style.border = '2px solid blue';
    checkboxButton.style.marginRight = '3px';
    checkboxButton.style.cursor = 'pointer';
    checkboxButton.style.backgroundColor = 'transparent';

    // change the color when the box is selected
    checkboxInput.addEventListener('change', () => {
        document.querySelectorAll('.main__radio').forEach(input => {
            if (input !== checkboxInput) {
                input.checked = false;
                input.parentElement.querySelector('.custom-radio-button').style.backgroundColor = 'transparent';
            }
        });

        if (checkboxInput.checked) {
            checkboxButton.style.backgroundColor = 'blue';
        } else {
            checkboxButton.style.backgroundColor = 'transparent';
        }
    });

    checkboxButton.addEventListener('click', () => {
        checkboxInput.checked = !checkboxInput.checked;
        checkboxInput.dispatchEvent(new Event('change'));
    });
});