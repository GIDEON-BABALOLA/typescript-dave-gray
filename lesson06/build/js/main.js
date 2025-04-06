"use strict";
//Here it says that all of the keys in this key value pair are
//going to be strings and all of the values in this key value
//pair are going to be numbers., also index signature does not
//support numbers
const todaysTransactions = {
    Pizza: -10,
    Books: -6,
    Job: 60
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
console.log(todaysNet(todaysTransactions));
