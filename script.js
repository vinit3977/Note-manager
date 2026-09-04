// Get required HTML elements
const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const noteCount = document.getElementById("noteCount");


// Function to update the total note count
function updateNoteCount() {
    const totalNotes = notesContainer.children.length;
    noteCount.textContent = totalNotes;
}


// Function to add a new note
function addNote() {

    const noteText = noteInput.value.trim();

    // Do not add an empty note
    if (noteText === "") {
        alert("Please enter a note.");
        return;
    }


    // Create the main note element
    const note = document.createElement("div");
    note.classList.add("note");


    // Create element for note text
    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = noteText;


    // Create actions container
    const actions = document.createElement("div");
    actions.classList.add("note-actions");


    // Create Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");


    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");


    // Create Important button
    const importantBtn = document.createElement("button");
    importantBtn.textContent = "Mark Important";
    importantBtn.classList.add("important-btn");


    // Edit functionality
    editBtn.addEventListener("click", function () {

        const newText = prompt(
            "Edit your note:",
            text.textContent
        );

        if (newText !== null && newText.trim() !== "") {
            text.textContent = newText.trim();
        }

    });


    // Delete functionality
    deleteBtn.addEventListener("click", function () {

        note.remove();

        updateNoteCount();

    });


    // Important functionality
    importantBtn.addEventListener("click", function () {

        note.classList.toggle("important");

        if (note.classList.contains("important")) {
            importantBtn.textContent = "Unmark Important";
        } else {
            importantBtn.textContent = "Mark Important";
        }

    });


    // Add buttons to actions container
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    actions.appendChild(importantBtn);


    // Add text and actions to note
    note.appendChild(text);
    note.appendChild(actions);


    // Add note to webpage
    notesContainer.appendChild(note);


    // Clear input field
    noteInput.value = "";


    // Update total note count
    updateNoteCount();
}


// Add Note button event
addNoteBtn.addEventListener("click", addNote);


// Allow Enter key to add a note
noteInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addNote();
    }

});