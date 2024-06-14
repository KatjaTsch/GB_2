// const myPromise = new Promise((resolve, reject) => {});

// myPromise.then((value) => {}).catch((error) => console.log("ошибка"));

// const url1 = "https://jsonplaceholder.typicode.com/users";

// fetch(url1).then((response) => console.log(response));
// fetch(url1)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("что-то пошло не так"));

// const getData = (url1) =>
//   new Promise((resolve, reject) => {
//     fetch(url1).then((response) =>
//       response
//         .json()
//         .then((data) => resolve(data))
//         .catch((error) => reject(error))
//     );
//   });

// getData("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// const getData2 = async (url1) => {
//   try {
//     // ожидание
//     const resp = await fetch(argUrl);
//     const data = resp.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchData = await getData2(url1);
// console.log("----------");
// console.log(fetchData);

// AtppUmWiLjLTNJulxCSgiZKPrqgqYfq2jIcZ3LeA
// https://api.nasa.gov/
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

const nasaUrl =
  "https://api.nasa.gov/planetary/apod?api_key=AtppUmWiLjLTNJulxCSgiZKPrqgqYfq2jIcZ3LeA&count=10";

const getData2 = async (argUrl) => {
  try {
    // ожидание
    const resp = await fetch(argUrl);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchData = await getData2(nasaUrl);
console.log("----------");
console.log(fetchData);
