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

    createSavedEventsSummary();
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
  updateSavedEvents();
}

/**
 * Creates the saved events summary at the bottom of the home page.
 */
function createSavedEventsSummary() {
  let main = document.querySelector("main");

  let summarySection = document.createElement("section");
  summarySection.id = "saved-events";

  let heading = document.createElement("h2");
  heading.textContent = "Saved Events";

  let message = document.createElement("p");
  message.id = "saved-message";
  message.textContent = "No events have been saved yet.";

  let savedList = document.createElement("ul");
  savedList.id = "saved-events-list";

  summarySection.appendChild(heading);
  summarySection.appendChild(message);
  summarySection.appendChild(savedList);

  main.appendChild(summarySection);
}

/**
 * Updates the saved events list.
 */
function updateSavedEvents() {
  let savedCards = document.querySelectorAll(".saved-event");
  let savedList = document.querySelector("#saved-events-list");
  let message = document.querySelector("#saved-message");

  while (savedList.firstChild) {
    savedList.removeChild(savedList.firstChild);
  }

  if (savedCards.length === 0) {
    message.textContent = "No events have been saved yet.";
  } else {
    message.textContent = "";

    for (let index = 0; index < savedCards.length; index++) {
      let card = savedCards[index];

      let eventName = card.querySelector("h3").textContent;
      let eventTime = card.querySelector("time").textContent;
      let paragraphs = card.querySelectorAll("p");
      let eventLocation = paragraphs[2].textContent;

      let listItem = document.createElement("li");
      listItem.textContent =
        eventName + " - " + eventTime + " - " + eventLocation;

      savedList.appendChild(listItem);
    }
  }
}
