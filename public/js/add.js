$(document).ready(() => {

  
  const $addEventForm = $("form.addEvent");
  const $titleInput = $("input.title");
  const $addressInput = $("input.address");
  const $cityInput = $("input.city");
  const $stateInput =$("input.state");
  const $zipInput = $("input.zip");
  const $detailInput = $("textarea.details");
  const $hoursInput = $("input.hours")
 
    
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
    $.post("/api/event", {
      title: title,
      city: city,
      state: state,
      address: address,
      zip: zip,
      details: details,
      timeFrame: timeFrame
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