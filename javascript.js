$("#enter-btn").click(function(){
  createCard();
});

$("#right-section").on("click",'.read-btn', function(){
  $(this).toggleClass("markRead");
  $(this).closest(".card").toggleClass("markCard");
  $(this).closest("#web-link").toggleClass("markLink");
});

$("#right-section").on("click", ".delete-btn", function(){
  $(this).closest(".card").remove();
});

function createCard(){
  var websiteTitle = $("#title").val();
  var websiteURL = $("#website").val();

  $("#right-section").append(
    `<article class="card">
    <h2>`+websiteTitle+`<h2>
    <div><a id="web-link" href="http://`+websiteURL+`" target="_blank">`+websiteURL+`</a></div>
    <button type="button" class="read-btn">Read</button>
    <button type="button" class="delete-btn">Delete</button>
    </article>`);
}
