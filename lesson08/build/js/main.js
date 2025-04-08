"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Partial<Assignment this means that only attributes of the interface Assignment can be passed as the second argument of the function updateAssignment
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 96 }));
const assignGraded = updateAssignment(assign1, { grade: 96 });
console.log(assignGraded);
// Required and Readonly
//required require all the properties now
const recordAssignment = (assign) => {
    //send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 88, this won't work, can't assign to grade because it is a read only propery
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//Even though true is optional, it is also required
//Most Popular Utility Type
//Record Utility Type
//Here it is saying the key and values are strings
const hexColorMap = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "B",
    Kelly: "U"
};
const gradeData = {
    Sara: { assign1: 20, assign2: 30 },
    Kelly: { assign1: 30, assign2: 40 }
};
const score = {
    studentId: "k123",
    grade: 86,
};
const preview = {
    studentId: "k123",
    title: "Final Year Project"
};
// ReturnType
// type newAssign = { title : string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users").then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
