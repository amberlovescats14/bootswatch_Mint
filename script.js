$(document).ready(function () {
    for (let i = 0; i < 7; i++) {
        let html =
            `<div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/200" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Edit</a>
        <a href="#" class="btn btn-danger">Delete</a>

  </div>
</div>`
        $('#card-wrapper').append(html)
    }
})