//Task 1:
function addTwoNums(num1,num2){
    return num1+num2;
}
console.log(sum=addTwoNums(50,50));

//Task 2:
function substractTwoNums(num1,num2){
    return num1-num2;
}
const substract=substractTwoNums(100,50);
console.log(substract);

//Task 3:
function multiplyTwoNums(num1,num2){
    console.log(num1*num2);
}
multiplyTwoNums(100,50);

//Task 4:
function divideTwoNums(num1,num2){
    console.log(num1/num2);
}
divideTwoNums(100,50);

//Task 5:
function findRemainder(num1,num2){
    console.log(num1%num2);
}
findRemainder(100,3);

//Task 6:
function add2(num1,num2){
    let add=num1+=num2;
    console.log(add);
}
add2(50,50);

//Task 7:
function sub2(num1,num2){
    let sub=num1-=num2;
    console.log(sub);
}
sub2(100,50);

//Task 8:
function compareGreaterLess(num1,num2){
    if(num1>num2){
        console.log(`${num1} is greater than ${num2}`);
    }else if(num1<num2){
        console.log(`${num1} is less than ${num2}`);
    }else{
        console.log(`${num1} is equal to ${num2}`);
    }
}
compareGreaterLess(55,56);

//Task 9:
function compareGreaterEqualLessEqual(num1,num2){
    if(num1>=num2){
        console.log(`${num1} is greater than equal to ${num2}`);
    }else{
        console.log(`${num1} is less than equal to ${num2}`);
        

    }
}
compareGreaterEqualLessEqual(66,66);

//Task 10:
function compareEqual(num1,num2){
    if(num1==num2){
        console.log(`The ${num1} and ${num2} are of equal value but may not be of same data type.`);
    }
    else if(num1===num2){
        console.log(`The numbers ${num1} and ${num2} are of same value and of same data type`);
    }
}
compareEqual(50.00,50)

//Task 11:
if(5<6 && 6>5){
    console.log("5 is less than 6");
}

//Task 12:
if(5<6 || 6>5){
    console.log("5 is not equal to 6");
}

//Task 13
let z=false;
if(!z){
    console.log("true");
}else{
    console.log("false");
}

//Task 14
let check=5;
const value=check>0?0:1;
if(value==0){
    console.log("Positive");
}else{
    console.log("Negative");
}



