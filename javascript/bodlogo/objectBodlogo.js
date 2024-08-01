// // Huvirgah  "2020 Toyota Coralla" gedeg shig
// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
// };
// const printFullname = `${movie.year} ${movie.title} ${movie.director}`;
// console.log(printFullname);

// const album = {
//   title: "Abbey Road",
//   artist: "The Beatles",
//   releaseYear: 1969,
// };

// const printFullname = `${album.releaseYear} ${album.title} ${album.artist}`;

// console.log(printFullname);

// const jackson = {
//   title: "Thriller",
//   artist: "Michael Jackson",
//   releaseYear: 1982,
//   genre: "Pop",
// };

// const printFullname = `${jackson.releaseYear} ${jackson.title} ${jackson.artist} ${jackson.genre}`;
// console.log(printFullname);

// // Grade 60aas ih buyu tentsuu baih ueiin humuusiin neriig arrayd hadgal gedeg shig
// // Salary 50000 buyu tentsuu

// const employees = [
//   { name: "John", salary: 50000 },
//   { name: "Jane", salary: 60000 },
//   { name: "Jim", salary: 45000 },
// ];

// const worker = employees
//   .filter((item) => item.salary >= 50000)
//   .map(({ name }) => name);
//   console.log(worker);

// // Price 1000 aas ihiig

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 },
// ];

// const electricPro = products
//   .filter((item) => item.price > 1000)
//   .map(({ name }) => name);
// console.log(electricPro);

// // title ni type ni number baival ter objectiig ol

// const books = [
//   { title: 1984, author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" },
// ];

// const numberTitle = books.find((item) => typeof item.title === "number");
// console.log(numberTitle);

// // Price 10 aas ih baigab baraanii nerig hevle. Hervee baihgui bol not found gej hevle. Ternary operator ashiglana gedeg bodlogo shig
// // Price 150 aas ih iig

// const badgets = [
//   { name: "Smartphone", price: 619 },
//   { name: "Smartwatch", price: 19 },
//   { name: "Bluetooth Speaker", price: 49 },
// ];

// const getBadgets = () => {
//   const greaterThan = badgets
//     .filter((item) => item.price > 150)
//     .map(({ name }) => name);
//   return greaterThan.length ? greaterThan : "Not found";
// };
// console.log(getBadgets());

// // Price 2 ih buyu tentsuu

// const groceries = [
//   { name: "Apple", price: 1 },
//   { name: "Milk", price: 3 },
//   { name: "Bread", price: 2 },
// ];

// const getGroceries = () => {
//   const greaterThan = groceries
//     .filter((item) => item.price >= 4)
//     .map(({ name }) => name);
//   return greaterThan.length ? greaterThan : "Not found";
// };

// console.log(getGroceries());

// // Price 100 as ih

// const furniture = [
//   { name: "Chair", price: 45 },
//   { name: "Table", price: 150 },
//   { name: "Lamp", price: 25 },
// ];

// const getTavilga = () => {
//   const tavilga = furniture
//     .filter((item) => item.price > 100)
//     .map(({ name }) => name);
//   return tavilga.length ? tavilga : "Not found ";
// };
// console.log(getTavilga());

// // Hun tus buriin  ovog neriig ashiglaad fullname iig ni hevle gedeg shig

// const authors = [
//   { firstName: "Mark", lastName: "Twain" },
//   { firstName: "Ernest", lastName: "Hemingway" },
//   { firstName: "Jane", lastName: "Austen" },
// ];

// const fullname = authors.map(({firstName,lastName})=> `${firstName} ${lastName}`)
// console.log(fullname);

// const students = [
//   { firstName: "Alice", lastName: "Johnson" },
//   { firstName: "Bob", lastName: "Brown" },
//   { firstName: "Carol", lastName: "Davis" },
// ];

// const fullname = students.map(({firstName,lastName})=> `${firstName} ${lastName}`)
// console.log(fullname);

// const musicians = [
//   { firstName: "Ludwig", lastName: "Beethoven" },
//   { firstName: "Wolfgang", lastName: "Mozart" },
//   { firstName: "Johann", lastName: "Bach" },
// ];

// const fullname = musicians.map(
//   ({ firstName, lastName }) => `${firstName} ${lastName}`
// );
// console.log(fullname);

// // Zohiol tus buriig hden jiliin omno zohiogdoj baisniig ni hevle. Hugatsaag ni haruulsan shine keyless update hiine gedeg shig
// const movies = [
//   { title: "The Shawshank Redemption", year: 1994 },
//   { title: "The Godfather", year: 1972 },
//   { title: "The Dark Knight", year: 2008 },
// ];

// const year = movies.map((movie) => ({
//   writtenYear: new Date().getFullYear() - movie.year,
//   ...movie,
// }));
// console.log(year);

// const albums = [
//   { title: "Abbey Road", year: 1969 },
//   { title: "The Wall", year: 1979 },
//   { title: "Thriller", year: 1982 },
// ];

// const year = albums.map((album) => ({
//   writtenYear: new Date().getFullYear() - album.year,
//   ...album,
// }));
// console.log(year);

// const plays = [
//   { title: "Hamlet", year: 1603 },
//   { title: "A Midsummer Night's Dream", year: 1595 },
//   { title: "Death of a Salesman", year: 1949 },
// ];

// const year = plays.map((play) => ({
//   writtenYear: new Date().getFullYear() - play.year,
//   ...play,
// }));
// console.log( year);

// // Duriin id aar ni completed iig update hiih function bich

// const events = [
//   { id: 1, name: "Conference", attended: true },
//   { id: 2, name: "Workshop", attended: false },
//   { id: 3, name: "Meetup", attended: false },
// ];

// const updateEvent = (taskId) => {
//   const updated = events.find(({ id }) => id === taskId);
//   if (!updated) return "Not found";
//   updated.attended = true;
//   return events
// };
// console.log(updateEvent(2));

// const appoint = [
//   { id: 1, description: "Dentist appointment", attended: true },
//   { id: 2, description: "Team meeting", attended: false },
//   { id: 3, description: "Lunch with a friend", attended: false },
// ];

// const updated = (itemId) => {
//   const task = appoint.find(({ id }) => itemId === id);
//   if (!task) return "Not found";
//   task.attended = true;
//   return appoint;
// };

// console.log(updated());
