let myRealName = "Dave" // implicit
let meaningOfLife: number;
let isLoading: boolean;
let myAlbum: any;
let album: string | number; //union type
let myName: string = "Dave" //explicit
meaningOfLife =  42;
isLoading = false
album = "Van Halen"
album = 1984
// album = true

const sum = (a: number, b: number): number => {
    return a + b
}

let postId: string | number
let isActive: number | boolean //Because 0 and 1 can mean false and true
let re: RegExp = /\w+/g

