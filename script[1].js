// Get reference to the display input field
const display = document.getElementById('display');

// Select all calculator buttons
const buttons = document.querySelectorAll('.btn');

// Handle mouse click on calculator buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      // Clear display if 'C' is pressed
      display.value = '';
    } else if (value === '=') {
      // Calculate and display result if '=' is pressed
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error'; // Show error if expression is invalid
      }
    } else {
      // Append button value to the display
      display.value += value;
    }
  });
});

// Handle keyboard input
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    // If it's a number or operator, add to display
    display.value += key;
  } else if (key === 'Enter') {
    // Calculate result when Enter is pressed
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  } else if (key === 'Backspace') {
    // Delete last character when Backspace is pressed
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape') {
    // Clear the display when Escape is pressed
    display.value = '';
  }
});
