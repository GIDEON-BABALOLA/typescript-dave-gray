// Generics
// Some times we simply don't know what types will be provided
const stringEcho = (arg: string): string => arg
const echo = <T>(arg: T): T =>  arg
const isObj = <T>(arg: T): boolean => {
    return (typeof arg === "object" && !Array.isArray(arg)) && arg !== null
}
// arg !== null we do this because type of null is object
const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if(Array.isArray(arg) && !arg.length){
        return { arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return { arg, is: false}
    }
    return { arg, is : !!arg}
}
console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue("Dave"))
console.log(isTrue(""))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue({name : "Dave"}))
console.log(isTrue([]))
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

interface BoolCheck<T> {
    value : T,
    is : boolean
}
const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length){
        return {  value : arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return { value : arg, is: false}
    }
    return { value : arg, is : !!arg}
}

interface HasID {
    id: number
}
const processUser  = <T extends HasID>(user: T): T =>{
    return user
}
console.log(processUser({id : 1, name: "Dave"}))
// error console.log(processUser({ name: "Dave"}))

const getUsersProperty = <T extends HasID, k extends keyof T>(users: T[], key: k): T[k][] => {
    return users.map(user => user[key]) 
}
class StateObject<T> {
    private data: T
    constructor(value: T){
        this.data = value
    }
    get state(): T {
        return this.data
    }
    set state(value: T) {
this.data = value
    }
    }
const store = new StateObject("John")
console.log(store.state)
const myState = new StateObject<(string | number | boolean)[]>([16])
myState.state = (["Dave", 42, true])
console.log(myState.state)