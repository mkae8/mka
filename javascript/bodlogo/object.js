// // --------> Bodlogo 1
// // price niilber

// const items = [
//   { name: "Item", price: 30 },
//   { name: "Item2", price: 20 },
//   { name: "Item3", price: 50 },
// ];

// const niitPrice = items.reduce((acc, value) => acc + value.price, 0);

// console.log(niitPrice);

// // ---------> Bodlogo 2
// // buh authoruudiig avaad 1 array hadglaad gargah

// const books = [
//   { title: "book1", author: "Author1" },
//   { title: "book2", author: "Author2" },
//   { title: "book3", author: "Author3" },
// ];
// const authors = books.map((hamaagui) => hamaagui.author); // .author
// console.log(authors);

// // // --------> Bodlogo 3

// // // bob gesen nertei objectiig ol

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const findBob = users.find((item) => item.name === "Bob"); // .name !!
// console.log(findBob);

// ---------> bodlogo 1
// objectoos duriin keyg ni function parametereer damjuulahad utgiig avdag bolgoh

// const book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   year: 1960,
// };

// function bookinfo(bookobj) {
//   console.log(`title: ${bookobj.title}`);
//   console.log(`author: ${bookobj.author}`);
//   console.log();
// }
// bookinfo(book);

// // ---------> bodlogo 2
// // grade n 60 aas ih buyu tentsuu baih uyeiin humuusiin neriig arrayd hadgal

// const students = [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: 59 },
//   { name: "Charlie", grade: 72 },
// ];
// const dun = students.filter((hamaagui) => hamaagui.grade >= 60);
// console.log(dun);

// // ----------> Bodlogo 3
// // Price 10 aas ih buyu tentsuu baih uyeiin humuusiin neriig arrayd hadgal

// const product = [
//   { name: "Pen", price: 5 },
//   { name: "Notebook", price: 12 },
//   { name: "Eraser", price: 1 },
// ];

// // --------> bodlogo 4
// // hun tus buriin ovog neriig ashiglaad fuulname iiig ni hevle

// const people = [
//   { firstname: "John", lastname: "Doe" },
//   { firstname: "Jane", lastname: "Smith" },
//   { firstname: "Emily", lastname: "Jones" },
// ];

// const printFullname = people.map(
//   ({ firstname, lastname }) => `${firstname} ${lastname}`
// );

// console.log(printFullname);

// // ---------> bodlogo 7

// // duriin id aar ni completed iig update hiih function bich

// const tasks = [
//   { id: 1, description: "Do laundry", completed: false },
//   { id: 2, description: "Clean dishes", completed: false },
//   { id: 3, description: "Buy groceries", completed: false },
// ];

//   // Bodlogo 9

//   const users1 = [
//     { id: 1, name: "Alice", email: "alice@example.com" },
//     { id: 2, name: "Bob", email: "bob@example.com" },
//   ];
//   const users2 = [
//     { id: 2, name: "Bob", email: "bob@example.com" },
//     { id: 3, name: "Charlie", email: "charlie@example.com" },
//   ];

//   const concat = users1.concat(users2).reduce((acc, item) => {
//     const foundItem = acc.find((el) => el?.email === item.email);

//     if (!foundItem) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
