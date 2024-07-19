// ------------> Bodlogo 1

// Huvirgah  "2020 Toyota Coralla" gedeg shig
// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
// };
//  const result = `${movie.year}  ${movie.title} ${movie.director}`
//  console.log(result);
// console.log(`${movie.year}  ${movie.title} ${movie.director}`);

// const album = {
//   title: "Abbey Road",
//   artist: "The Beatles",
//   releaseYear: 1969
// };

// console.log(`${album.releaseYear} ${album.title} ${album.artist}`);

// const album = {
//   title: "Thriller",
//   artist: "Michael Jackson",
//   releaseYear: 1982,
//   genre: "Pop",
// };

// console.log(
//   `${album.releaseYear} ${album.title} ${album.artist} ${album.genre}`
// );

// Bodlogo 1

// const sales = [
//     { product: "Apple", quantity: 10 },
//     { product: "Apple", quantity: 7 },
//     { product: "Banana", quantity: 5 },
//     { product: "Banana", quantity: 3 },
//   ];

//   const totalQuantities = sales.reduce((acc, { product, quantity }) => {
//     if (acc[product]) {
//       acc[product] += quantity;
//     } else {
//       acc[product] = quantity;
//     }
//     return acc;
//   }, {});

//   // Bodlogo 2
//   const book = { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 };

//   const getValue = (key) => book[key];

// -------------->> Bodlogo 2

//   const students = [
//     { name: "Bob", grade: 59 },
//     { name: "Alice", grade: 85 },
//     { name: "Charlie", grade: 72 },
//   ];

//   const names = students.filter((item) => item.grade >= 60).map(({ name }) => name);

// Grade 60aas ih buyu tentsuu baih ueiin humuusiin neriig arrayd hadgal gedeg shig
// Salary 50000 buyu tentsuu
// const employees = [
//   { name: "John", salary: 50000 },
//   { name: "Jane", salary: 60000 },
//   { name: "Jim", salary: 45000 },
// ];

// const workers = employees
//   .filter((item) => item.salary >= 50000)
//   .map(({ name }) => name);

// console.log(workers);

// Price 1000 aas ihiig
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 },
// ];
// const electricProducts = products
//   .filter((item) => item.price > 1000)
//   .map(({ name }) => name);
// console.log(electricProducts);

// title ni type ni number baival ter objectiig ol
// const books = [
//   { title: 1984, author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" },
// ];

// const getTitleNumber = books.find(({ title }) => typeof title === "number");

// console.log(getTitleNumber);

// ------------>> Bodlogo 3

//   const products = [
//     { name: "Pen", price: 5 },
//     { name: "Eraser", price: 1 },
//     { name: "Notebook", price: 12 },
//   ];

//   const getProducts = () => {
//     const matchedProducts = products.filter(({ price }) => price > 10).map(({ name }) => name);

//     return matchedProducts.length ? matchedProducts : "Not found";
//   };

// Price 10 aas ih baigab baraanii nerig hevle. Hervee baihgui bol not found gej hevle. Ternary operator ashiglana gedeg bodlogo shig

// Price 150 aas ih iig
// const badgets = [
//   { name: "Smartphone", price: 699 },
//   { name: "Smartwatch", price: 199 },
//   { name: "Bluetooth Speaker", price: 49 },
// ];
// const getBatgets = () => {
//   const greaterThan = badgets
//     .filter((item) => item.price > 150)
//     .map(({ name }) => name);
//   return greaterThan.length ? greaterThan : "Not found";
// };
// console.log(getBatgets());

// Price 2 ih buyu tentsuu
// const groceries = [
//   { name: "Apple", price: 1 },
//   { name: "Milk", price: 3 },
//   { name: "Bread", price: 2 },
// ];

// const getGroceries = () => {
//   const foods = groceries
//     .filter((item) => item.price >= 2)
//     .map(({ name }) => name);
//   return foods.length ? foods : "Not found";
// };
// console.log(getGroceries());

// Price 100 as ih
// const furniture = [
//   { name: "Chair", price: 45 },
//   { name: "Table", price: 150 },
//   { name: "Lamp", price: 25 },
// ];

// const getFurniture = () => {
//   const tavilga = furniture
//     .filter((item) => item.price > 1000)
//     .map(({ name }) => name);
//   return tavilga.length ? tavilga : " bhq bnaa ";
// };
// console.log(getFurniture());

// ----------->> Bodlogo 4

// const authors = [
//   { firstName: "Mark", lastName: "Twain" },
//   { firstName: "Ernest", lastName: "Hemingway" },
//   { firstName: "Jane", lastName: "Austen" },
// ];

// const printFullName  = authors.map(({firstName, lastName})=> `${firstName} ${lastName}`)

// console.log(printFullName);

// const students = [
//   { firstName: "Alice", lastName: "Johnson" },
//   { firstName: "Bob", lastName: "Brown" },
//   { firstName: "Carol", lastName: "Davis" },
// ];

// const printFullName = students.map(
//   ({ firstName, lastName }) => `${firstName} ${lastName}`
// );
// console.log(printFullName);

// const musicians = [
//   { firstName: "Ludwig", lastName: "Beethoven" },
//   { firstName: "Wolfgang", lastName: "Mozart" },
//   { firstName: "Johann", lastName: "Bach" },
// ];

// const printFullNmae = musicians.map(
//   ({ firstName, lastName }) => `${firstName} ${lastName}`
// );
// console.log(printFullNmae);

//   const people = [
//     { firstName: "John", lastName: "Doe" },
//     { firstName: "Jane", lastName: "Smith" },
//     { firstName: "Emily", lastName: "Jones" },
//   ];

//   const fullnames = people.map(({ firstName, lastName }) => `${firstName} ${lastName}`);

// ----------> Bodlogo 5

//   const books = [
//     { title: "1984", year: 1949 },
//     { title: "The Great Gatsby", year: 1925 },
//     { title: "To Kill a Mockingbird", year: 1960 },
//   ];

//   const updatedBooks = books.map((book) => ({writtenYear: new Date().getFullYear() - book.year,...book,
//   }));

// const movies = [
//   { title: "The Shawshank Redemption", year: 1994 },
//   { title: "The Godfather", year: 1972 },
//   { title: "The Dark Knight", year: 2008 },
// ];

// const updatedMovies = movies.map((item) => ({
//   writtenYear: new Date().getFullYear() - item.year,
//   ...item,
// }));

// console.log(updatedMovies);

// const albums = [
//   { title: "Abbey Road", year: 1969 },
//   { title: "The Wall", year: 1979 },
//   { title: "Thriller", year: 1982 },
// ];

// const updatedAlbums = albums.map((item) => ({
//   writtenYear: new Date().getFullYear() - item.year,
//   ...item,
// }));
// console.log(updatedAlbums);

// const plays = [
//   { title: "Hamlet", year: 1603 },
//   { title: "A Midsummer Night's Dream", year: 1595 },
//   { title: "Death of a Salesman", year: 1949 },
// ];

// const updatedPlays = plays.map((item) => ({
//   writtenYear: new Date().getFullYear() - item.year,
//   ...item,
// }));

// console.log(updatedPlays);

// ----------> Bodlogo 6
// Duriin id aar ni completed iig update hiih function bich

//   const tasks = [
//     { id: 1, description: "Do laundry", completed: false },
//     { id: 2, description: "Clean dishes", completed: false },
//     { id: 3, description: "Buy groceries", completed: false },
//   ];

//   const updateTask = (taskId) => {
//     const foundTask = tasks.find(({ id }) => id === taskId);

//     if (!foundTask) return "Not found";

//     foundTask.completed = true;

//     return tasks;
//   };

//   console.log(updateTask(2));

// const events = [
//   { id: 1, name: "Conference", attended: true },
//   { id: 2, name: "Workshop", attended: false },
//   { id: 3, name: "Meetup", attended: false },
// ];
// const updatedEvent = (eventsId) => {
//   const foundEvent = events.find(({ id }) => id === eventsId);
//   if (!foundEvent) return "Id bhq bnaa";
//   foundEvent.attended = true;
//   return events;
// };
// console.log(updatedEvent());

// const appointments = [
//   { id: 1, description: "Dentist appointment", attended: true },
//   { id: 2, description: "Team meeting", attended: false },
//   { id: 3, description: "Lunch with a friend", attended: false },
// ];

// const updatedAppoint = (appointmentsId) => {
//   const findAppoint = appointments.find(({ id }) => id === appointmentsId);
//   if (!findAppoint) return "Not found";
//   findAppoint.attended = true;
//   return appointments;
// };
// console.log(updatedAppoint(2));
