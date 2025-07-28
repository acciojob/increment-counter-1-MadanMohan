// Create <p> element for counter
const counter = document.createElement("p");
counter.id = "counter";
counter.textContent = "0"; // Initial value

// Create <button> element
const button = document.createElement("button");
button.id = "incrementBtn";
button.textContent = "Increment";

// Append elements to the body
document.body.appendChild(counter);
document.body.appendChild(button);

// Add click event
button.addEventListener("click", function () {
  const currentValue = parseInt(counter.textContent);
  alert(currentValue);
  counter.textContent = currentValue + 1;
});
