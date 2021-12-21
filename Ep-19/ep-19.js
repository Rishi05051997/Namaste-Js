///// **************map, filter, reduce****************
///// map function is used to transform an array, so what does mean by transformation suppose we want to transform each n every value of array and get a new array out of it

const arr = [5,1,3,2,6];

/// Double - [10,2,6,4,12];

/// Triple - [15,3,9,8,10];

/// Binary = ["101", "1", "11", "10", "100"];

// const operation = (arr, i , newArr) => {
//     arr.map(el => {
//         newArr.push(i*el)
//     })
// }
// const newArr = []
// operation(arr, 2, newArr)

// console.log(newArr)

// const double = (x) => {
//     return 2*x
// }

// const triple =(x) =>{
//     return 3*x
// }

// const binary = (x) => {
//     return x.toString(2);
// }

// const output = arr.map(binary)

// console.log(output)


//// Filter -->> Filter function is used to filter the values inside an array

const arr_2 = [1,2,3,4,5,6,7,8,9];

const arr_3 = [
    {id:1, name:'Vrushabh', gender:'male'},
    {id:1, name:'Megha', gender:'female'},
    {id:1, name:'Ganesh', gender:'male'},
    {id:1, name:'Roshni', gender:'female'},
    {id:1, name:'Jayesh', gender:'male'},
]

//// so in above case if we want to filter out values which are greater than 6 so we can do that with the help of filter function


/// filter out odd values

const isOdd = (x) => {
    return x%2 ===1;
}

const isGreater = (x) => {
   return x>2;
}
const output = arr_2.filter(isGreater)

console.log(output)


const isMale = (val) => {
    return val.gender == 'male'
}

const males = arr_3.filter(isMale)

console.log(males)


//// Reduce function --->> reduce function is usefull where we want to take all the values of an array & come up with a single value out of them

const arr_4 = [1,102,3,66,4,67,6,7,98,9];

//// if we want to sum up all the elements of an array or if we want maximum value out of from all elements from above array then for that we used reduce function

const findingSum = (prevVal, currentVal) => {
    prevVal = prevVal + currentVal;
    return prevVal;
}


const reducedVal = arr_4.reduce(findingSum, 0);

console.log(reducedVal);


const maxFinder = (prevVal, currentVal) => {
    return currentVal > prevVal?currentVal:prevVal;
}

const max = arr_4.reduce(maxFinder,0)

console.log(max)



////// More Examples Filter, map, reduce 

const users = [
    {firstName:"Vrushabh", lastName:"Dhatrak", age:24},
    {firstName:"Jayesh", lastName:"Kadam", age:26},
    {firstName:"Rahul", lastName:"Sanp", age:26},
    {firstName:"Akanksha", lastName:"Karad", age:20},
    {firstName:"Ganesh", lastName:"Karad", age:20},
    {firstName:"Keshav", lastName:"Karad", age:20},
]


const fullName = (val) => {
    return val.firstName+" "+val.lastName;
}


const names = users.map(fullName);

console.log(names)


/// list of users betwwen 20 to 22

const filterByAge = (prevVal, currentVal) => {
    if(currentVal.age>prevVal.age){
        return currentVal;
    }
}

// const filteredAges = users.reduce((prevVal, currentVal) => {
//     if(prevVal[currentVal.age]){
//         prevVal[currentVal.age] = ++prevVal[currentVal.age]
//     }else {
//         prevVal[currentVal.age]=1;
//     }
//     // console.log(currentVal)
//     return currentVal;
// }, {});

// console.log(filteredAges);

const ageLessThan_22 = users.filter((user)=> user.age<22).map((x)=> x.firstName)

// const ageLessThan_22 = users.reduce((acc, crr)=>{
//     if(acc[crr.age]<22){
//         acc 
//     }
// })

console.log(ageLessThan_22)

