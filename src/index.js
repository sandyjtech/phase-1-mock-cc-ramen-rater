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
function postRamen(name, restaurant, image, rating, comment) {
    const formData = {
      name: name,
      restaurant: restaurant,
      image: image,
      rating: rating,
      comment: comment,
    };
    const submitRamen = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      };
      return fetch(baseUrl, submitRamen)
      .then((response) => response.json())
      .then((newRamen) => {
        console.log(newRamen);
        const id = newRamen.id;
        let ramenNewImageDiv = document.createElement("img");
        ramenNewImageDiv.src = newRamenImage;
       // ramenDetailComment.textContent = newRamenComment;
        ramenDetailName.textContent = newRamen.name;
        ramenDetailRestaurant.textContent = newRamen.restaurant;
        ramenDetailRating.textContent = newRamen.rating;
        ramenDetailComment = newRamen.comment;
        ramenImageDiv.src = newRamen.image;        
        ramenDiv.appendChild(ramenNewImageDiv);

      });
}    


function renderRamen(ramens) {
    
  ramens.forEach((ramen) => {
    let ramenImageDiv = document.createElement("img");
    ramenImageDiv.src = ramen.image;
    ramenDiv.appendChild(ramenImageDiv);   
//display only first onloading image
ramenDetailImage.src = ramen.image;
    ramenDetailName.textContent = ramen.name;
    ramenDetailRestaurant.textContent = ramen.restaurant;
    ramenDetailRating.textContent = ramen.rating;
    ramenDetailComment.textContent = ramen.comment;
    
    //event listener
    ramenImageDiv.addEventListener("click", (e) => {
      console.log(e.target.src);
      ramenDetailImage.src = ramen.image;
      ramenDetailName.textContent = ramen.name;
      ramenDetailRestaurant.textContent = ramen.restaurant;
      ramenDetailRating.textContent = ramen.rating;
      ramenDetailComment.textContent = ramen.comment;
    });
    
  });

  //form event listener
  ramenForm.addEventListener("submit", (e) => {
      e.preventDefault();
    console.log(e.target.name.value);
 postRamen(e.target.name.value,
     e.target.restaurant.value,
     e.target.image.value,
     e.target.rating.value,
     e.target.textarea)
  });
}
fetchRamen();
