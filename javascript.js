
<!--//Button Effects-->
$("#enter-btn").click(function(){
  createCard();
  emptyFields();
  updateLinkCount();
  updateUnreadCount();
});

$("#right-section").on("click",'.read-btn', function(){
  $(this).toggleClass("markRead");
  $(this).closest(".card").find(".delete-btn").toggleClass("markLink");
  $(this).closest(".card").toggleClass("markCard");
  $(this).closest(".card").find("a").toggleClass("markLink");
  updateReadCount();
  updateUnreadCount();
});

$("#right-section").on("click", ".delete-btn", function(){
  $(this).closest(".card").remove();
  updateReadCount();
  updateUnreadCount();
  updateLinkCount();
});

<!--//Clear Inputfield-->
$("#title, #website").keyup(function(){
  var checkTitle = /\S/.test($("#title").val());
  var checkWebsite = /\S/.test($("#website").val());
  if(checkTitle && checkWebsite){
    $("#enter-btn").attr("disabled", false);
  } else {
    $("#enter-btn").attr("disabled", true);
  }
});

<!--//Functions-->
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

function emptyFields() {
  $("#title").val("");
  $("#website").val("");
  $("#enter-btn").attr("disabled", true);
};

function createLink(){
  var websiteURL = $("#website").val();
  return `<a id="web-link" href="http://`+websiteURL+`" target="_blank">`+websiteURL+`</a>`
}

function updateLinkCount(){
  $("#linkCount").text("Links: "+ $(".card").length);
}

function updateReadCount(){
  $("#readCount").text("Read: "+ $(".markRead").length);
}

function updateUnreadCount(){
  var count = $(".card").length - $(".markRead").length;
  $("#unreadCount").text("Unread: "+ count);
}
