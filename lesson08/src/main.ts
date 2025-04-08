// Utility Types

// Partial Utility Type
interface Assignment {
    studentId: string,
    title :  string,
    grade: number,
    verified?: boolean

}
//Partial<Assignment this means that only attributes of the interface Assignment can be passed as the second argument of the function updateAssignment
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate}
}
const assign1: Assignment = {
    studentId: "compsci123",
    title : "Final Project",
    grade : 0
}
console.log(updateAssignment(assign1, {grade : 96}))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 96})
console.log(assignGraded)


// Required and Readonly
//required require all the properties now
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    //send to database, etc.
    return assign;
}
const  assignVerified: Readonly<Assignment> = {...assignGraded, verified : true}
 // assignVerified.grade = 88, this won't work, can't assign to grade because it is a read only propery
 recordAssignment({...assignGraded, verified: true})
 //Even though true is optional, it is also required



 //Most Popular Utility Type
 //Record Utility Type
 //Here it is saying the key and values are strings
 const hexColorMap: Record<string, string> = {
    red : "#FF0000",
    green : "#00FF00",
    blue: "0000FF"
 }
 type Students = "Sara" | "Kelly"
 type LetterGrades = "A" | "B" | "C" | "D" | "U"
 const finalGrades: Record<Students, LetterGrades> = {
    Sara : "B",
    Kelly : "U"
 }
 interface Grades {
    assign1: number,
    assign2: number
 }
 const gradeData: Record<Students, Grades> = {
    Sara : { assign1 : 20, assign2 : 30},
    Kelly : {assign1 : 30, assign2: 40}
 }

 // Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">
const score: AssignResult = {
    studentId : "k123",
    grade : 86,
}
type AssignPreview = Omit<Assignment, "grade" | "verified">
const preview: AssignPreview = {
    studentId : "k123",
    title : "Final Year Project"
}

//Exclude and Extract
//This ones are not working with interface, they are working with string literals and union types
type adjustedGrade = Exclude<LetterGrades, "U">
type highGrades =  Extract<LetterGrades, "A" | "B">

// NonNullable
type AllPossibleGrades = "Dave" | "John" | null | undefined
type namesOnly = NonNullable<AllPossibleGrades> // This excludes both null and undefined


// ReturnType
// type newAssign = { title : string, points: number}

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}
type NewAssign = ReturnType<typeof createNewAssign>
const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)



// Parameters function, deriving a type from the types passd into the function
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]
const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited Utility Type - helps us with the ReturnType of a Promise
interface User {
    id: number,
    name: string,
    username: string,
    email: string
}
const fetchUsers = async (): Promise<User[]> => {

const data = await fetch("https://jsonplaceholder.typicode.com/users").then(res => {
    return res.json()
}).catch(err => {
    if(err instanceof Error) console.log(err.message)
})
return data
}
type FetchUsersReturnType = Awaited <ReturnType<typeof fetchUsers>>
fetchUsers().then(users => console.log(users))