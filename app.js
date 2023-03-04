import { businessName } from "./exports/business.js";
import { carBrands } from "./exports/cars.js";
import { banks } from "./exports/banks.js";
import { streets } from "./exports/streets.js";
import { us_cities } from "./exports/cities.js";
import { lastNames } from "./exports/last-names.js";
import { firstNames } from "./exports/first-names.js";

const btn = document.getElementById("btn");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const dateOfBirth = document.getElementById("dateOfBirth");
const firstAndLastName = document.getElementById("firstAndLastName");
const pesel = document.getElementById("pesel");
const idNumber = document.getElementById("idNumber");
const codepost = document.getElementById("codepost");
const town = document.getElementById("town");
const street = document.getElementById("street");
const nip = document.getElementById("nip");
const regon = document.getElementById("regon");
const cardNumber = document.getElementById("cardNumber");
const bankNumber = document.getElementById("bankNumber");
const bankName = document.getElementById("bankName");
const carBrand = document.getElementById("carBrand");
const carNumber = document.getElementById("carNumber");
const vin = document.getElementById("vin");
const companyName = document.getElementById("companyName");

let startingAge = document.getElementById("startingAge");
let endingAge = document.getElementById("endingAge");
let elements = document.querySelectorAll("div.output");
const letters = "abcdefghijklmnopqrstuvwxyz";

const getFirstName = () => {
  return firstNames[Math.floor(Math.random() * firstNames.length)];
};

const getLastName = () => {
  return lastNames[Math.floor(Math.random() * lastNames.length)];
};

const fiveRandomNumbers = () => {
  return Math.floor(Math.random() * 90000) + 10000;
};

const randomCarbrand = () => {
  return carBrands[Math.floor(Math.random() * carBrands.length)];
};

const getRandomBank = () => {
  return banks[Math.floor(Math.random() * banks.length)];
};

const getCompanyName = () => {
  return businessName[Math.floor(Math.random() * businessName.length)];
};

const randomDigits = (number) => {
  let result = "";

  for (let i = 0; i < number; i++) {
    result += Math.floor(Math.random() * 10);
  }

  return result;
};

const randomLetters = (number) => {
  let result = "";

  for (let i = 0; i < number; i++) {
    result += letters[Math.floor(Math.random() * letters.length)];
  }

  return result.toUpperCase();
};

const firstIdLetters = () => {
  let randomLetters = "";

  for (let i = 0; i < 3; i++) {
    let randomNum = Math.floor(Math.random() * letters.length);
    let randomDigit = letters[randomNum];
    randomLetters += randomDigit;
  }

  return randomLetters.toUpperCase();
};

const firstBankNumberLetters = () => {
  let randomLetters = "";

  for (let i = 0; i < 2; i++) {
    let randomNum = Math.floor(Math.random() * letters.length);
    let randomDigit = letters[randomNum];
    randomLetters += randomDigit;
  }

  return randomLetters.toUpperCase();
};

const randomTown = () => {
  return us_cities[Math.floor(Math.random() * us_cities.length)];
};

const randomStreet = () => {
  return streets[Math.floor(Math.random() * streets.length)];
};

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const getBirthDate = (min = 1950, max = 2020) => {
  // convertToNum(startingAge.value, endingAge.value);

  // if (startingAge.value !== "" && endingAge.value !== "") {
  //   min = startingAge.value;
  //   max = endingAge.value;
  // }

  let year = Math.floor(Math.random() * (max - min) + min);
  let month = Math.floor(Math.random() * (12 - 1) + 1)
    .toString()
    .padStart(2, "0");

  let day = daysInMonth(year, month);

  // console.log(min, max);

  return `${day}/${month}/${year}`;
};

const copyToClipboard = (event) => {
  let element = event.target.value;
  // let text = element.textContent.trim();
  navigator.clipboard.writeText(element);

  console.log("Skopiowano:" + element);
};

elements.forEach((e) => {
  e.addEventListener("click", copyToClipboard);
});

firstName.addEventListener("click", copyToClipboard);

const convertToNum = (a, b) => {
  a = parseInt(a);
  b = parseInt(b);

  return a, b;
};

const generateNames = () => {
  const firstNameOutput = getFirstName(); // first name
  const lastNameOutput = getLastName(); // last name
  const lastPeselDigits = fiveRandomNumbers(); // five random numbers for PESEL
  const birthDate = getBirthDate(); // DD/MM/YYYY
  const idDigits = firstIdLetters(); // random letters
  const bankDigits = firstBankNumberLetters(); // two random letters

  const firstDigits = birthDate.replace(/\//g, "");

  let birthDaysPesel = firstDigits.match(/.{1,2}/g);

  firstName.setAttribute("value", firstNameOutput);
  lastName.setAttribute("value", lastNameOutput);
  dateOfBirth.setAttribute("value", birthDate);
  pesel.setAttribute(
    "value",
    birthDaysPesel[3] + birthDaysPesel[1] + birthDaysPesel[0] + lastPeselDigits
  );
  firstAndLastName.setAttribute(
    "value",
    firstNameOutput + " " + lastNameOutput
  );
  idNumber.setAttribute("value", idDigits + fiveRandomNumbers());
  codepost.setAttribute("value", fiveRandomNumbers());
  town.setAttribute("value", randomTown());
  street.setAttribute("value", randomStreet());
  nip.setAttribute("value", randomDigits(10));
  regon.setAttribute("value", randomDigits(9));
  companyName.setAttribute("value", getCompanyName());
  cardNumber.setAttribute("value", randomDigits(16));
  bankNumber.setAttribute("value", bankDigits + randomDigits(26));
  bankName.setAttribute("value", getRandomBank());
  carBrand.setAttribute("value", randomCarbrand());
  carNumber.setAttribute("value", firstIdLetters() + randomDigits(4));
  vin.setAttribute(
    "value",
    randomLetters(2) +
      randomDigits(1) +
      randomLetters(1) +
      randomDigits(1) +
      randomLetters(2) +
      randomDigits(3) +
      randomLetters(2) +
      randomDigits(4)
  );

  console.log(firstName.value, lastName.value, dateOfBirth.value);
};

btn.addEventListener("click", generateNames);

window.onload = () => {
  generateNames();
};
