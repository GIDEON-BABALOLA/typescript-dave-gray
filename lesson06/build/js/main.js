"use strict";
//Here it says that all of the keys in this key value pair are
//going to be strings and all of the values in this key value
//pair are going to be numbers., also index signature does not
//support boolean
const todaysTransactions = {
    Pizza: -10,
    Books: -6,
    Job: 60,
    Dave: 10
    // now other attributes can be added here, since I put 
    // readonly [index: string]: number inside interface TransactionObj
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
//Since I have set the index signature to readOnly, I cannot assign
// value to todaysTransactions again
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40
//Typescript has a problem here because it does not know that 
// todaysTransaction does not contain a key dave
console.log(todaysTransactions["Dave"]);
const student = {
    name: "Doug",
    GPA: 3.6,
    classes: [100, 200]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
const SanSiro = {
    name: "san siro",
    capacity: 10000,
    clubs: ["inter milan", "ac milan"]
};
for (const key in SanSiro) {
    console.log(`${key}: ${SanSiro[key]}`);
}
console.log(typeof SanSiro["capacity"]);
//keyof is creating the union type of name , capacity and clubs
Object.keys(SanSiro).map((key) => {
    // Imagine we don't know the type of keys this object is
    console.log(SanSiro[key]);
});
const logStudentKey = (stadium, key) => {
    console.log(`Student ${key}: ${stadium[key]} `);
};
logStudentKey(SanSiro, "name");
const monthlyIncomes = {
    salary: 400,
    bonus: 100,
    sidehustle: 260
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
    console.log(monthlyIncomes[revenue]);
}
