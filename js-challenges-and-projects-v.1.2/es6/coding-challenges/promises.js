//Challenge - Promises - Example
// const buyFlightTicket = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const error = false;

//       if (error) {
//         reject("Sorry your payment was not successful");
//       } else {
//         resolve("Your payment was successful");
//       }
//     }, 3000);
//   });
// };

// buyFlightTicket()
//   .then((success) => console.log(success))
//   .catch((error) => console.log(error));

//Challenge - Promises

let userData = {
  firstName: "Alsace",
  age: 25,
  email: "arcablar@ust.edu.ph",
};

const findUserData = (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userData) {
        // if NOT user data, reject
        reject(`Sorry, your data cannot be found.`);
      } else {
        resolve(
          `Here's your data: ${userData.firstName}, ${userData.age}, ${userData.email}`
        );
      }
    }, 1000);
  });
};

findUserData(userData)
  .then((success) => console.log(success))
  .catch((error) => console.log(error));

findUserData(null)
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
