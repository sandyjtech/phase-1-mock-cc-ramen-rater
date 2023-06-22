// write your code here
// {
//     "id": 1,
//     "name": "Shoyu Ramen",
//     "restaurant": "Nonono",
//     "image": "./assets/ramen/shoyu.jpg",
//     "rating": 7,
//     "comment": "Delish. Can't go wrong with a classic!"
//   },

//Dom Elements
let ramenDiv = document.getElementById("ramen-menu");
let ramenDetailDiv = document.getElementById("ramen-detail");
let ramenDetailImage = document.querySelector(".detail-image");
let ramenDetailName = document.querySelector(".name");
let ramenDetailRestaurant = document.querySelector(".restaurant");
let ramenDetailRating = document.getElementById("rating-display");
let ramenDetailComment = document.getElementById("comment-display");
const ramenForm = document.getElementById("new-ramen");

const baseUrl = "http://localhost:3000/ramens";

function fetchRamen() {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => renderRamen(data));
}
function renderRamen(ramens) {
  ramens.forEach((ramen) => {
    let ramenImageDiv = document.createElement("img");
    ramenImageDiv.src = ramen.image;
    ramenDiv.appendChild(ramenImageDiv);

    //event listener

    ramenImageDiv.addEventListener("click", (e) => {
      console.log(e.target.src);
      ramenDetailImage.src = ramen.image;
      ramenDetailName.textContent = ramen.name;
      ramenDetailRestaurant.textContent = ramen.restaurant;
      ramenDetailRating.textContent = ramen.rating;
      ramenDetailComment.textContent = ramen.comment;
    });
    //form event listener
    ramenForm.addEventListener("submit", (e) => {
      e.preventDefault();
      //saving submit data
      let newRamenName = e.target.name;
      let newRamenRestaurant = e.target.restaurant.value;
      let newRamenImage = e.target.image;
      let newRamenRating = e.target.rating;
      let newRamenComment = e.target.comment;

      //posting new data to DOM
      ramenDetailComment.textContent = newRamenComment;
      ramenDetailName.textContent = newRamenName;
      ramenDetailRestaurant.textContent = newRamenRestaurant;
      ramenDetailRating.textContent = newRamenRating;
      ramenImageDiv.src = newRamenImage;
      ramenDiv.appendChild(ramenImageDiv);
    });
  });
}
fetchRamen();
