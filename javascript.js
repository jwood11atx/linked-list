
$("#enter-btn").click(function(){
  createCard();
});

function createCard(){
  $("#right-section").append(
    `<article class="card">
    <h2>The Website Title<h2>
    <div><a id="web-link" href="#">www.thewebsiteurl.com</a></div>
    <button type="button" id="read-btn">Read</button>
    <button type="button" id="delete-btn">Delete</button>
    </article>`);
};
