console.log('bobbyhadz.com');

// ✅ Get the first and last day of the current year
const currentYear = new Date().getFullYear();
console.log(currentYear); // 👉️ 2023

const firstDay = new Date(currentYear, 0, 1);
console.log(firstDay); // 👉️ Sun Jan 01 2023

const lastDay = new Date(currentYear, 11, 31);
console.log(lastDay); // 👉️ Sun Dec 31 2023

// ------------------------------------------------------

// // 2) Getting the First and Last day of any year

// const year = 2030;

// const firstDay = new Date(year, 0, 1);
// console.log(firstDay); // 👉️ Tue Jan 01 2030

// const lastDay = new Date(year, 11, 31);
// console.log(lastDay); // 👉️ Tue Dec 31 2030
