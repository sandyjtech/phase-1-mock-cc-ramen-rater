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
let ramenDetailImage = document.getElementById("detail-image");
let ramenDetailName = document.querySelector(".name");
let ramenDetailRestaurant = document.querySelector(".restaurant");
let ramenDetailRating = document.getElementById("rating-display");
let ramenDetailComment = document.getElementById("comment-display");

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
  });
  //event listener
  let ramSelectedImg = document.querySelector("img");
  ramSelectedImg.addEventListener("click", (e) => {});
}
fetchRamen();
