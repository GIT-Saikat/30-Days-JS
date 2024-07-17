//Task 1
function  even_odd(num){
    console.log(num%2==0?"Even":"Odd");
}
even_odd(100);

//Task 2
function square_num(num){
    return num**2;
}
console.log(sq=square_num(50));

//Task 3
const max=function(num1,num2){
    console.log(`Max of 2 nums is ${Math.max(num1,num2)}`);
}
max(5,10);

//Task 4
const concat=function(str1,str2){
    return str1+' '+str2;
}
const str1='Saikat';
const str2='Mondal';
console.log(result=concat(str1,str2));

//Task 5
const sum=(num3,num4)=>(num3+num4);
console.log(result1=sum(5,5));

//Task 6
const checkString=(str3,char)=>{
    return str3.includes(char);
}
console.log(result2=checkString("Saikat","S"));

//Task 7
function favouriteDish(name,dish="Pizza") {
    return `${name} Favourite Dish is ${dish}`;
}
console.log(result3=favouriteDish("Burger"));

//Task 8
function greet(name2, age = "19") {
    return `${name2} age ${age} Welcome !!`;
}
console.log(result4= greet("Saikat"));

//Task 9
function higherOrderFunc1(func, number) {
    return func(number) * func(number)
};
const func = function (number) {
    return number * number;
};
const result6 = higherOrderFunc1(func, 8);
console.log(result6);

//Task 10
function higherOrderFunc2(func2,func3,value){
    const result5=func2(value);
    const anotherResult=func3(result5);
    console.log(anotherResult);
}
function func2(val){
    return val-1;
}
function func3(res){
    return res-1;
}
const value =10;
higherOrderFunc2 (func2,func3,value);