//FETCH

// const fetch = require("node-fetch");

// //end-point = URL
// fetch("https://jsonplaceholder.typicode.com/comments/1")
//   .then((response) => response.json())
//   .then((data) =>
//     console.log(`Post ID: ${data.postId}, ID: ${data.id}, Name: ${data.name}`)
//   );

//ASYNC & AWAIT
// const photos = [];

// async function photoUpload() {
//   let uploadStatus = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       photos.push("Picture");
//       resolve("Photo Uploaded");
//     }, 3000);
//   });

//   let result = await uploadStatus;
//   console.log(result);
//   console.log(photos.length);
// }

// photoUpload();

//EXERCISE
const fetch = require("node-fetch");

async function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

getJoke();
