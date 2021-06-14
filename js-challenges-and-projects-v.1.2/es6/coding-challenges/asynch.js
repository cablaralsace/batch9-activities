//get recipe

//avoid triangle callback Hell
// async function getRecipeAW() {
//   const IDs = await getIds();
//   //   console.log(IDs);
//   const recipe = await getRecipe(IDs[2]);
//   //   console.log(recipe);

//   return recipe;
// }

// async function getPublisherAW() {
//   const publisher = await getRelated("Jonas");
//   //   console.log(publisher);
//   return publisher;
// }

// function getIds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const recipeId = [234, 423, 123, 134, 123];
//       resolve(recipeId); // kung ano yung gustong ireturn na tamang value, RESOLVE
//     }, 1500);
//   });
// }

// function getRecipe(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout((id) => {
//       const recipe = { title: "Fresh Tomato Pasta", publisher: "Jonas" };
//       resolve(recipe);
//     }, 1500);
//   });
// }

// function getRelated(publisher) {
//   return new Promise((resolve, reject) => {
//     setTimeout((publisher) => {
//       const recipe2 = { title: "Italian Pizza", publisher: "Jonas" };
//       resolve(recipe2);
//     }, 1500);
//   });
// }

// getPublisherAW()
//   .then((result) =>
//     console.log(`${result.publisher} published ${result.title}.`)
//   )
//   .catch((error) => console.log(error));

// getRecipeAW()
//   .then((result) => console.log(`${result.title} is the best ever.`))
//   .catch((error) => console.log(error));

//timeout shortcut reuse
// async function getRecipeAW() {
//   const IDs = await getIds();
//   console.log(IDs);
//   const recipe = await getRecipe(IDs[2]);
//   console.log(recipe);
//   const publisher = await getRelated("Jonas");
//   console.log(publisher);
// }
// //fn for timeout shortcut
// function timeout(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// async function getIds() {
//   await timeout(1500);
//   const recipeId = [234, 423, 123, 134, 123];
//   return recipeId;
// }
// async function getRecipe(id) {
//   await timeout(1500);
//   const recipe = { title: "Fresh Tomato Pasta", publisher: "Jonas" };
//   return recipe;
// }
// async function getRelated(publisher) {
//   await timeout(1500);
//   const recipe2 = { title: "Italian Pizza", publisher: "Jonas" };
//   return recipe2;
// }
// getRecipeAW();

function logOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("one"));
    }, Math.random() * 2000);
  });
}

function logTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("two"));
    }, Math.random() * 2000);
  });
}

async function inOrder() {
  await logOne();
  await logTwo();
}

inOrder(logOne, logTwo)
  .then((result) => result)
  .catch((error) => error);
