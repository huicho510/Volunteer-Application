$(document).ready(() => {
  // Getting a reference to the input field where user adds a new todo;
  // let $newItemInput = $("input.new-search");
  // Our new todos will go inside the todoContainer;
  
  const $addEventForm = $("form.addEvent");
  const $titleInput = $("input.title");
  const $addressInput = $("input.address");
  const $cityInput = $("input.city");
  const $stateInput =$("input.state");
  const $zipInput = $("input.zip");
  const $detailInput = $("textarea.details");
  const $hoursInput = $("input.hours")
 


  // Our initial todos array
  // Getting todos from database when page loads



    
  $addEventForm.on("submit", event => {
    event.preventDefault();
    const eventData = {
      title: $titleInput.val().trim(),
      city: $cityInput.val().trim(),
      state: $stateInput.val(),
      address: $addressInput.val().trim(),
      zip: $zipInput.val().trim(),
      details: $detailInput.val().trim(),
      timeFrame: $hoursInput.val().trim()

    };
    console.log(eventData);
     
    addEvent(eventData.title,eventData.city, eventData.state, eventData.address, eventData.zip, eventData.details, eventData.timeFrame );
     $titleInput.val("");
     $cityInput.val("");
     $stateInput.val("");
     $addressInput.val("");
     $zipInput.val("");
     $detailInput.val("");
     $hoursInput.val("");
  });
  
  function addEvent(title, city, state, address, zip, details, timeFrame) {
    $.ajax({
     url: "/api/event",
     method:"POST",
     data:{
      title: title,
      city: city,
      state: state,
      address: address,
      zip: zip,
      details: details,
      timeFrame: timeFrame
     } 
    }) .then(() => {
      window.location.replace("/add");
    })
    // $.post("/api/event", {
    //   title: title,
    //   city: city,
    //   state: state,
    //   address: address,
    //   zip: zip,
    //   details: details,
    //   timeFrame: timeFrame
    // })
    //   .then(() => {
    //     window.location.replace("/add");
    //   })
    //   .catch(addEventErr);
  }



  function addEventErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});