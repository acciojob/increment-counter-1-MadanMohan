// Access the DOM elements
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");

// Add click event to the button
incrementButton.addEventListener("click", function () {
  // Get current value from counter
  const currentValue = parseInt(counterElement.textContent);

  // Alert the current (un-incremented) value
  alert("Current value: " + currentValue);

  // Increment the value and update the counter
  counterElement.textContent = currentValue + 1;
});
