//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    const heading = document.createElement('h1');
    heading.id = 'verification_heading';
    heading.textContent = 'Verify Your Account';
    body.appendChild(heading);

    const subheading = document.createElement('p');
    subheading.id = 'verification_subtext';
    subheading.textContent = 'Please enter the 6-digit code sent to your email or phone.';
    body.appendChild(subheading);

    const otpContainer = document.createElement('div');
    otpContainer.classList.add('code-container');
    body.appendChild(otpContainer);

    for (let i = 0; i < 6; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1; // Limit input to a single digit
        input.classList.add('code');
        input.id = `code-${i + 1}`;
        input.addEventListener('input', handleInput);
        input.addEventListener('keydown', handleBackspace);

        otpContainer.appendChild(input);
    }

    document.getElementById('code-1').focus();

    function handleInput(event) {
        const currentInput = event.target;
        const value = currentInput.value;

        if (!/\d/.test(value)) {
            currentInput.value = ''; // Clear invalid input
            return;
        }

        const nextInput = currentInput.nextElementSibling;
        if (nextInput && nextInput.tagName === 'INPUT') {
            nextInput.focus();
        }
    }
    function handleBackspace(event) {
        const currentInput = event.target;

        if (event.key === 'Backspace') {
            if (currentInput.value === '') {
                const previousInput = currentInput.previousElementSibling;
                if (previousInput && previousInput.tagName === 'INPUT') {
                    previousInput.focus();
                    previousInput.value = ''; // Clear the value in the previous input
                }
            } else {
                currentInput.value = '';
            }
        }
    }
});
