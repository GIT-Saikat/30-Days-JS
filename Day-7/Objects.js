//Task 1
let book={
    title:"Prawn Cutlet",
    author:"Saikat Mondal",
    year:2095,
};
console.log(book);

//Task 2
console.log(book.title);
console.log(book.author);

//Task 3
book.getInfo=function(){
    return `${this.title}by${this.author}`;
};
console.log(book.getInfo());

//Task 4
book.updateYear = function (newYear) {
    this.year = newYear;
  };
  book.updateYear(2020);
  
  console.log(book);

//Task 5
let library = {
    name: "City Library",
    books: [
      { title: "Console Busters", author: "MJ", year: 2024 },
      { title: "Chai Aur Code", author: "HC", year: 2024 },
    ],
  };
  
console.log(library);

//Task 6
console.log(library.name); // Output: City Library
library.books.forEach((book) => {
  console.log(book.title);
});

//Task 7
let book = {
    title: "Chai Aur Code",
    author: "HC",
    year: 2024,
}; 
book.getTitleAndYear = function () {
    return `${this.title} (${this.year})`;
};
console.log(book.getTitleAndYear());

//Task 8
let book = {
    title: "Chai Aur Code",
    author: "HC",
    year: 2024,
};
book.getInfo = function () {
    return `${this.title} by ${this.author}`;
};
  
book.updateYear = function (newYear) {
    this.year = newYear;
};
book.updateYear(2020);
for (let key in book) {
    if (book.hasOwnProperty(key)) {
      console.log(`${key}: ${book[key]}`);
    }
}

//Task 9
let book = {
    title: "Chai Aur Code",
    author: "HC",
    year: 2024,
};
book.getInfo = function () {
    return `${this.title} by ${this.author}`;
};

book.updateYear = function (newYear) {
    this.year = newYear;
};
book.updateYear(2020);
  
console.log(Object.keys(book));
  
console.log(Object.values(book));
