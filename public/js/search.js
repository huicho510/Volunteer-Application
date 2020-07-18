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
  let opp = [];

  
  // Getting todos from database when page loads
    

  function initializeRows() {
    $eventContainer.empty();
    const rowsToAdd = [];
    for (let i = 0; i < opp.length; i++) {
      rowsToAdd.push(createNewRow(opp[i]));
    }
    $eventContainer.prepend(rowsToAdd);
  }

  function getEvents() {
    $.get("/api/event", data => {
      opp = data;
      console.log(opp);
      initializeRows();
    });
  }
  getEvents();
});

function createNewRow(opp) {
  const $newInputRow = $(
    [
      "<li class='list-group-item new-item'>",
      "<span>",
      opp.event_name,
      "<h5>WHERE: </h5>",
      opp.address,
      "<p>",
      opp.city,
      ", " + opp.state,
      " " + opp.zip,
      "</p>",
      "<p>",
      "Posted: " + opp.createdAt,
      "</p>",
      "<p>",
      "Updated: " + opp.updatedAt,
      "</p>",
      "<input type='text' class='edit' style='display: none;'>",
      "</li>"
    ].join("")
  );

  $newInputRow.find("button.delete").data("id", opp.id);
  $newInputRow.find("input.edit").css("display", "none");
  $newInputRow.data("event", opp);

  return $newInputRow;
}
