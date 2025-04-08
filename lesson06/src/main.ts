// Index Signatures
// Useful when creating an object but you don't know the exact
// names of the object keys, you  know the shapes of the 
// object and you can declare the types of keys and the types of
// values
// interface TransactionObj {
//     [index: string]: number 
// }
// interface TransactionObj {
//     readonly [index: string]: number 
//  }
interface TransactionObj {
readonly [index: string]: number
    Pizza: number,            
    Books: number,
    Job: number
}
//Here it says that all of the keys in this key value pair are
//going to be strings and all of the values in this key value
//pair are going to be numbers., also index signature does not
//support boolean
const todaysTransactions: TransactionObj = {
    Pizza : -10,
    Books: -6,
    Job: 60, 
    Dave : 10
    // now other attributes can be added here, since I put 
    // readonly [index: string]: number inside interface TransactionObj
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
//Since I have set the index signature to readOnly, I cannot assign
// value to todaysTransactions again

console.log(todaysNet(todaysTransactions))
// todaysTransactions.Pizza = 40
//Typescript has a problem here because it does not know that 
// todaysTransaction does not contain a key dave
console.log(todaysTransactions["Dave"])





////////////////////////////////////////////////////////////////////////////////
//we can use comman and semi column in interface
interface Student{
    [key: string] : string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}
const student: Student = {
    name: "Doug",
    GPA: 3.6,
    classes: [100, 200]
}
for ( const key in student){
    console.log(`${key}: ${student[key]}`)
}

//so how can I iterate through an Object that does not have an
// index signature provided
// new object
interface Stadium {
  //  [index: string]  : string | number | string[] | undefined
    name: string,
    capacity: number,
    clubs?: string[]
}
const SanSiro: Stadium = {
    name: "san siro",
    capacity : 10000,
    clubs: ["inter milan", "ac milan"]
}
for (const key in SanSiro) {
console.log(`${key}: ${SanSiro[key as keyof Stadium]}`)
}
console.log(typeof SanSiro["capacity"])
//keyof is creating the union type of name , capacity and clubs
Object.keys(SanSiro).map((key) => {
    // Imagine we don't know the type of keys this object is
    console.log(SanSiro[key as keyof typeof SanSiro])
})
const logStudentKey = (stadium: Stadium, key: keyof Stadium): void => {
    console.log(`Student ${key}: ${stadium[key]} `)
}
logStudentKey(SanSiro, "name")

///////////////////////////////////////////////////////
// literal types are not allowed in interfaces, but what we can
// use is a record utility type
interface Income {
//    [key: "salary" | "bonus"]: number
}
//Record is a utility type
type Streams = "salary" | "bonus" | "sidehustle"
type Incomes =  Record<Streams, number>
const monthlyIncomes: Incomes = {
    salary : 400,
    bonus : 100,
    sidehustle : 260
}
for(const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes])
    console.log(monthlyIncomes[revenue as keyof  typeof monthlyIncomes])
}
