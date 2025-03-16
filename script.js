//your JS code here. If required.
const inputs = document.querySelectorAll('.code');
inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const currentInput = e.target;
    const nextInput = inputs[index + 1];
    if (currentInput.value && nextInput) {
      nextInput.focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    const currentInput = e.target;
    const prevInput = inputs[index - 1];

    if (e.key === 'Backspace') {
      if (!currentInput.value && prevInput) {
        prevInput.focus();
        prevInput.value = '';
      }
    }
  });
});
