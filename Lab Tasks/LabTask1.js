
/**---------------------- Lab 1 Activities-----------------------------*/
let information = {
    Regno: "FA21-BSE-018",
    Name: "Muhammad Hussnain",
    Sem: "6th",
    Department: "Computer Science",
    Program: "Software Engineering",
    GPA: 3.34,
    Address: {
        City: "Attock",
        State: "Punjab",
        Country: "Pakistan"
    }
}

console.log(information.Address.Country);

function multiSum(z, x, y) {
    var sum = 0;
    for (let index = 2; index < z; index++) {
        if (index % x == 0 || index % y == 0) {
            sum += index;
        };
    };
    return sum;
};
console.log(multiSum(10, 3, 5));

function min(...params) {
    var min = params[0];
    for (let index = 0; index < params.length; index++) {
        if (min > params[index]) {
            console.log("Param index" + params[index]);
            min = params[index]
        }
    }
    return min;
}
function max(...params) {
    var max = params[0];
    for (let index = 0; index < params.length; index++) {
        if (max < params[index]) {
            max = params[index]
        }
    }
    return max;
}
console.log(max(4, 8, 1, 3));

/**-------------------------------Lab 1 Task 2---------------------------- */


function Solvedthis(x) {
    let res = {};
    if(x.sum)
    {
        sum=x[0];
        console.log(sum)
        console.log("I am in sum")

    }
    for (let index = 0; index < x.length; index++) {   
        
        sum=Math.sum(...x.sum);
        res['sum']=sum;
    }
    console.log(res)

}

Solvedthis({sum: [3,2,4], max: [2,4,3,5], min: [5,3,4,3]});


