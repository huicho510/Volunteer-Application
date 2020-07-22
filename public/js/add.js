$(document).ready(() => {
  // Getting a reference to the input field where user adds a new todo;
  // let $newItemInput = $("input.new-search");
  // Our new todos will go inside the todoContainer;
  
  const addEventForm = $("form.addEvent");
  const titleInput = $("input.title");
  const addressInput = $("input.address");
  const cityInput = $("input.city");
  const stateInput =$("value.state");

  // Adding event listeners for deleting, editing, and adding todos;
  // $(document).on("click", "button.delete", deleteEvent);
  // $(document).on("click", ".new-item", selectEvent);
  // $(document).on("blur", ".new-item", cancelEdit);
  // $(document).on("submit", "#todo-form", insertTodo);
    
  // Our initial todos array
  // Getting todos from database when page loads
    
  addEventForm.on("submit", event => {
    event.preventDefault();
    const title = titleInput.val().trim();
    const city = cityInput.val().trim();
    const state = stateInput.val();
    const address = addressInput.val().trim();
    console.log(title, city, state, address);
    if (!title || city || state || address) {
      return;
    }
    addEvent(title, city, state), address;
  });
  
  function addEvent(title, city, state, address) {
    $.post("/api/add", {
      title: title,
      city: city,
      state: state,
      address: address
    })
      .then(() => {
        window.location.replace("/add");
      })
      .catch(addEventErr);
  }

  function addEventErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
