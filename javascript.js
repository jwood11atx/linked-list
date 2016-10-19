$("#enter-btn").click(function(){
  createCard();
});

function createCard(){
  var websiteTitle = $("#title").val();
  var websiteURL = $("#website").val();

  $("#right-section").append(
    `<article class="card">
    <h2>`+websiteTitle+`<h2>
    <div><a id="web-link" href="https://`+websiteURL+`" target="_blank">`+websiteURL+`</a></div>
    <button type="button" id="read-btn">Read</button>
    <button type="button" id="delete-btn">Delete</button>
    </article>`);
}
