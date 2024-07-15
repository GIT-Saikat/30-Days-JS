//Task 1:
function check(num){
    if(num>0){
        console.log(`${num} is Positive`);
    }else if(num<0){
        console.log(`${num} is Negative`);
    }else{
        console.log(`${num} is Zero Number`);
    }
}
check(0);

//Task 2:
function verifyAge(age){
    if(age>=18){
        console.log(`The person of age ${age} is able to vote.`);
    }else{
        console.log(`Person of age ${age} is not eligible to vote.`);
    }
}
verifyAge(100);

//Task 3:
function largestOfThree(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log(`Largest of three is ${num1}`);
    }else if(num2>num1 && num2>num3){
        console.log(`Largest of three is ${num2}`);
    }else{
        console.log(`Largest of three is ${num3}`);
    }
}
largestOfThree(5,10,15);

//Task 4:
function useSwitch(day){
    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid Day");
    }
}
useSwitch(5);

//Task 5
let marks=50;
let grade;
switch(marks){
    case marks>=90:
        grade='A';
        break;
    case marks>=80:
        grade='B';
        break;
    case marks>=70:
        grade='C';
        break;
    case marks>=60:
        grade='D';
        break;
    default:
        grade='F';
}
console.log(`Marks obtained ${marks} and Grade is ${grade}.`);

//Task 6
let integer=50;
let checkEven=integer%2==0? `${integer} is even`:`${integer} is odd`;
console.log(checkEven);

//Task 7
function checkLeapYear(year){
    if(year%4==0 && (year%100!==0 || year%400==0)){
        console.log(`Year ${year} is a Leap Year.`);
    }else{
        console.log(`Year ${year} is not a Leap Year.`);
    }
}
checkLeapYear(2024);