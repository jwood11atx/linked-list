$("#enter-btn").click(function(){
  createCard();
});

$("#right-section").on("click",'.read-btn', function(){
  $(this).toggleClass("markRead");
  $(this).closest(".card").find(".delete-btn").toggleClass("markLink");
  $(this).closest(".card").toggleClass("markCard");
  $(this).closest(".card").find("a").toggleClass("markLink");
});

$("#right-section").on("click", ".delete-btn", function(){
  $(this).closest(".card").remove();
});

function createCard(){
  var websiteTitle = $("#title").val();

  $("#right-section").append(
    `<article class="card">
    <h2>`+websiteTitle+`<h2>
    <div>`+createLink()+`</div>
    <button type="button" class="read-btn">Read</button>
    <button type="button" class="delete-btn">Delete</button>
    </article>`);
}

function createLink(){
  var websiteURL = $("#website").val();
  return `<a id="web-link" href="http://`+websiteURL+`" target="_blank">`+websiteURL+`</a>`
}
