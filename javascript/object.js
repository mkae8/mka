// --------> Bodlogo 1
// price niilber

const items = [
  { name: "Item", price: 30 },
  { name: "Item2", price: 20 },
  { name: "Item3", price: 50 },
];

// const niitPrice = items.reduce((acc, value) => acc + value.price, 0);

// console.log(niitPrice);

// ---------> Bodlogo 2
// buh authoruudiig avaad 1 array hadglaad gargah

const books = [
  { title: "book1", author: "Author" },
  { title: "book2", author: "Author2" },
  { title: "book3", author: "Author3" },
];
const authors = books.map((hamaagui) => hamaagui.author); // .author
console.log(authors);

// // --------> Bodlogo 3

// // bob gesen nertei objectiig ol

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const findBob = users.find((item) => item.name === "Bob"); // .name !!
console.log(findBob);


