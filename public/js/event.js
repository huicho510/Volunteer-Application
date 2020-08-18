$(document).ready(() => {
  const $eventContainer = $(".event-container");
  let opp = [];
  
  getEvents();

  function initializeRows() {
    $eventContainer.empty();
    const rowsToAdd = [];
    for (let i = 0; i < opp.length; i++) {
      rowsToAdd.push(createNewRow(opp[i]));
    }
    $eventContainer.prepend(rowsToAdd);
  }
  
  function getEvents() {
    $.get("/api/event", user => {
      opp = user;
      console.log(user);
      initializeRows();
    });
  }
});

  
function createNewRow(opp) {
  const $newInputRow = $(
    [
      "<li class='list-group-item new-item'>",
      "<span>",
      "<h5>",
      opp.title,
      "</h5>",
      opp.address,
      "<p>",
      opp.city,
      ", " + opp.state,
      " " + opp.zip,
      "</p>",
      "<p>",
      opp.details,
      "</p>",  
      "<p class = time>",
      "Work Schedule: " + opp.timeFrame,
      "</p>",
      "<p class = time>",
      "Posted: " + opp.createdAt,
      "</p>",
      "<p class = time>",
      "Updated: " + opp.updatedAt,
      "</p>",
      "</li>"
    ].join("")
  );
  
  $newInputRow.data("event", opp);
  
  return $newInputRow;


}  