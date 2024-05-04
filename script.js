// 1
// let str = prompt("Введіть число");

// if (!isNaN(str)) {
//   let number = parseFloat(str);
//   if (number % 2 === 0) {
//     alert("Число парне");
//   } else {
//     alert("Число не парне");
//   }
// } else {
//   alert("Введене значення не є числом");
// }

// 2

// let str = confirm("Ти любиш математику");
// if (str) {
//   let massage = confirm("А фізику?");
//   if (massage) {
//     alert("Ну ти і дивний");
//   } else {
//     alert("Я теж");
//   }
// } else {
//   alert("Я теж не люблю математику :)");
// }

// 3
// const str = confirm("Ви жінка?");
// if (str) {
//   alert("Ви жінка");
// } else {
//   alert("ви чоловік");
// }

// 4
// let enterSize = prompt("Введіть ваш розмір Франція");
// if (enterSize == 36) {
//   alert("Ваш розмір у США 6");
// } else if (enterSize == 38) {
//   alert("Ваш розмір у США 8");
// } else if (enterSize == 40) {
//   alert("Ваш розмір у США 10");
// } else if (enterSize == 42) {
//   alert("Ваш розмір у США 12");
// } else if (enterSize == 44) {
//   alert("Ваш розмір у США 14");
// } else if (enterSize == 46) {
//   alert("Ваш розмір у США 16");
// } else if (enterSize == 48) {
//   alert("Ваш розмір у США 18");
// } else if (enterSize == 50) {
//   alert("Ваш розмір у США 20");
// } else {
//   alert("Щось не те");
// }

// // 5
// const message = confirm("Ви жінка?") ? "Ви жінка" : "Ви чоловік";
// alert(message);

// 6
// const question = confirm("Шоппінг?") || alert("Ти бяка");

// let question = confirm("Шоппінг?");
// if (question) {
// } else {
//   alert("Ти бяка");
// }
// let name = prompt("Імя") || "Іван";
// let surname = prompt("Прізвище") || "Іванова";
// let name2 = prompt("По батькові") || "Івановна";
// alert(name + " " + surname + " " + name2);

// let name = prompt("Введіть імя");
// let surname = prompt("По бітькові");
// let name2 = prompt("Прізвище");
// if (!name) {
//   name = "Іван";
// }
// if (!surname) {
//   surname = "Іванович";
// }
// if (!name2) {
//   name2 = "Іваонов";
// } else {
//   alert(name + " " + surname + " " + name2);
// }

// let logIn = prompt("Введіть логін");
// let enterPassword = prompt("Введіть парль");
// const login = "admin";
// const password = "qwerty";
// if (logIn === login && enterPassword === password) {
//   alert("Вітаю");
// } else {
//   alert("Сталася помилка");
// }

// let enterCurrency = prompt("Введіть валюту").toLowerCase();
// let buyRateD = 39.99;
// let sellRateD = 39.49;
// let buyRateE = 39.1;
// let sellRateE = 38.1;
// let buy;
// let sell;

// if (enterCurrency === "usd") {
//   buy = buyRateD;
//   sell = sellRateD;
// } else if (enterCurrency === "eur") {
//   buy = buyRateE;
//   sell = sellRateE;
// }

// if (enterCurrency === "usd" || enterCurrency === "eur") {
//   let changeCurrency = confirm("Купити чи продати?");

//   if (changeCurrency) {
//     let enterSum = prompt("Введіть суму");

//     if (!isNaN(enterSum)) {
//       alert(`Сума для купівлі: ${enterSum * buy}`);
//     } else {
//       alert("Введіть число");
//     }
//   } else {
//     let enterSum = prompt("Введіть суму");

//     if (!isNaN(enterSum)) {
//       alert(`Сума для продажу: ${enterSum * sell}`);
//     } else {
//       alert("Введіть число");
//     }
//   }
// } else {
//   alert("Введіть валюту");
// }

// // String: lexics
// let enterText = prompt("Введіть речення");

// if (enterText.includes("блін") || enterText.includes("фігня")) {
//   alert("Використовуйте коректні слова");
// } else {
//   alert("Добрий вечір");
// }
