////// Higher order function
//// One of the amazing thing inside Js is functional proramming & function programming is not possible without higher order function.
///// Higher Order Function -->> A function which take another function as an argument or returns a function from it is known as Higher Order Function




const area = (radius) => {
    return Math.PI*radius*radius;
}

const circuimference = (redius) => {
    return 2 * Math.PI * redius;
}

Array.prototype.calculate = (logic) => {
    let output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    // radius.map((el)=> {
    //     output.push(logic(el));
    // })
    return output;
}

const radius = [3,1,2,4];

// console.log(radius.map(area))
// // console.log(radius.map(circuimference))

// console.log(calculate(radius, area))

console.log(radius.calculate(circuimference))