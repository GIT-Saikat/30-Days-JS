//Task 1:(Straight multi-line print)
for(let i=1;i<=10;i++){
    console.log(i);
}
//Task 1:(Single line print) here result is string 
let result = '';
for (let i = 1; i <= 10; i++) {
  result += i + (i < 10 ? ' ' : '');
}
console.log(result);

//Task 2:
for(let i=1;i<=10;i++){
    console.log(`5*${i}=${5*i}`);
}

//Task 3:
let sum=0;
let i=1;
while(i<=10){
    sum=sum+i;
    i++;
}
console.log(`The sum of numbers from 1 to 10 is:${sum}`);

//Task 4:
let j=10;
while(j>=1){
    console.log(j--);
}

//Task 5:
let k=1;
do{
    console.log(k);
    k++;
}while(k<=5);

//Task 6:
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
console.log(factorial(5));

//Task 7:here row is string by initializing it with '' null value
for(let i=1;i<=5;i++){
    let row='';
    for(j=1;j<=i;j++){
        row=row+"*";
    }
    console.log(row);
}
//Task 7: Another way by using repeat()
let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "*";
    console.log(str.repeat(i));
}


//Task 8:
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }else{
        console.log(i);
    }
}

//Task 9:
for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }else{
        console.log(i);
    }
}


  

