// Index Signatures
// Useful when creating an object but you don't know the exact
// names of the object keys, you don know the shapes of the 
// object and you can declare the types of keys and the types of
// values
// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }
interface TransactionObj {
    [index: string]: number 
}
//Here it says that all of the keys in this key value pair are
//going to be strings and all of the values in this key value
//pair are going to be numbers., also index signature does not
//support numbers
const todaysTransactions: TransactionObj = {
    Pizza : -10,
    Books: -6,
    Job: 60
}
console.log(todaysTransactions.Pizza)
console.log(todaysTransactions["Pizza"])
let prop: string = "Pizza"
console.log(todaysTransactions[prop])
const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for(const transaction in transactions){
        total += transactions[transaction]
    }
    return total
}
console.log(todaysNet(todaysTransactions))