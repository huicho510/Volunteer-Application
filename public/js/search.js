$(document).ready(() => {
// Getting a reference to the input field where user adds a new todo;
// let $newItemInput = $("input.new-search");
// Our new todos will go inside the todoContainer;
  const $eventContainer = $(".event-container");
  // Adding event listeners for deleting, editing, and adding todos;
  // $(document).on("click", "button.delete", deleteEvent);
  // $(document).on("click", ".new-item", selectEvent);
  // $(document).on("blur", ".new-item", cancelEdit);
  // $(document).on("submit", "#todo-form", insertTodo);
  
  // Our initial todos array
  let event = [];
  
  // Getting todos from database when page loads
    

  function initializeRows() {
    $eventContainer.empty();
    const rowsToAdd = [];
    for (let i = 0; i < event.length; i++) {
      rowsToAdd.push(createNewRow(event[i]));
    }
    $eventContainer.prepend(rowsToAdd);
  }

  function getEvents() {
    $.get("/api/event", data => {
      event = data;
      initializeRows();
    });
  }
  getEvents();
});

