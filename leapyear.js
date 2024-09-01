// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

const year = prompt("Year: ")

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(`${year} is a leap year`)
} else {
    console.log(`${year} is not a leap year`)
}