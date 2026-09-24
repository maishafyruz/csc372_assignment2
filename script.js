/*
  Name: Maisha Fyruz
  Date: 09.24.2026
  CSC 372-01
  This file adds interactive Save Event behavior to the Campus Event Guide.
*/

window.addEventListener("load", setup);

/**
 * Sets up the Save Event features when the page loads.
 */

function setup() {
  let eventCards = document.querySelectorAll(".event-card");

  for (let index = 0; index < eventCards.length; index++) {
    let card = eventCards[index];

    let saveButton = document.createElement("button");
    saveButton.textContent = "Save Event";
    saveButton.classList.add("save-button");

    saveButton.addEventListener("click", toggleEvent);
    card.appendChild(saveButton);
  }
}


function toggleEvent(event) {
  let button = event.currentTarget;
  let card = button.parentElement;

  if (card.classList.contains("saved-event")) {
    card.classList.remove("saved-event");
    button.textContent = "Save Event";
  } else {
    card.classList.add("saved-event");
    button.textContent = "Remove Event";
  }
}
