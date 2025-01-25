let a=40
let ans=(a%2==0)?"The given number is Even":"The given number is Odd"
console.log(ans)

let mark=72
let grade=(mark>=90)?"A":(mark>70)?"B":(mark>40)?"C":"F"
console.log("Grade: "+grade)

let array=[2,4,5,6,7,8,9]
let array2=[90,91,92,93,94]
let arrayCopy=[...array,...array2]
console.log(arrayCopy)