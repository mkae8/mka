// ------------------------------------->  1. String Methods

// 1.1 charAt(index)
// Returns the character at the specified index in a string.
let str = "JavaScript";
console.log(srt.charAt(4)); // "S"

// 1.2 includes(substr)
// Checks if the string contains a specific substring.
// Мөр дотор тодорхой дэд мөр байгаа эсэхийг шалгана.
console.log(str.includes("Script")); // Output: true
console.log(str.includes("script")); // Output: false (case-sensitive)

// 1.3 slice(start, end)
// Extracts a section of a string and returns it as a new string.
// Мөрөөс тодорхой хэсгийг тайрч, шинэ мөр болгон буцаана.
console.log(str.slice(0, 4)); // Output: "Java"
console.log(str.slice(4)); // Output: "Script"

// 1.4 replace(substr, newStr)
// Replaces the first occurrence of a substring with a new string.
// Эхний тохирсон дэд мөрийг шинэ мөрөөр солиход ашиглана.
let text = "Hello World";
console.log(text.replace("World", "JavaScript")); // Гарц: "Hello JavaScript"

// 1.5 split(delimiter)
// Splits a string into an array of substrings based on the specified delimiter.
// Мөрийг тодорхой заагчаар хэсэг болгон задалж массив болгож буцаана.
console.log(text.split(" ")); // Гарц: ["Hello", "World"]

// 1.6 toUpperCase()
// Мөрийн бүх үсгийг том болгоно.
console.log(text.toUpperCase()); // Гарц: "HELLO WORLD"

// 1.7 trim()
// Мөрийн эхлэл, төгсгөлийн хоосон зайг арилгана.
let spaced = "   JavaScript   ";
console.log(spaced.trim()); // Гарц: "JavaScript"

// -------------------------------------> 2. Массивын аргууд (Array Methods)

// 2.1 push(item)
// Adds one or more elements to the end of an array and returns the new length.
// Массивын төгсгөлд элемент нэмээд, шинэ уртыг буцаана.
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Гарц: [1, 2, 3, 4]

// 2.2 pop()
// Removes the last element from an array and returns it.
// Массивын төгсгөлийн элементийг устгаад, устгасан элементийг буцаана
arr.pop();
console.log(arr); // Гарц: [1, 2, 3]

// 2.3 map(callback)
// Creates a new array with the results of calling a provided function on every element.
// Бүх элементүүдэд өгөгдсөн функц үйлчилж, шинэ массив буцаана.
let doubled = arr.map((x) => x * 2);
console.log(doubled); // Гарц: [2, 4, 6]

// 2.4 filter(callback)
// Creates a new array with all elements that pass the test implemented by the provided function.
// Тодорхой нөхцөлийг хангасан элементүүдийг шүүж, шинэ массив үүсгэнэ.
let filtered = arr.filter((x) => x > 1);
console.log(filtered); // Гарц: [2, 3]

// 2.5 reduce(callback, initialValue)
// Applies a function against an accumulator and each element to reduce it to a single value.
// Массивыг нэг утга болгон бууруулна.
let sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // Гарц: 6

// -------------------------------------> 3. Объектын аргууд (Object Methods)

// 3.1 Object.keys(obj)
// Returns an array of a given object's property names
// Объектын бүх түлхүүрийн нэрийг массив болгон буцаана.
let obj = { name: "John", age: 30 };
console.log(Object.keys(obj)); // Гарц: ["name", "age"]

// 3.2 Object.values(obj)
// Returns an array of a given object's property values
// Объектын бүх утгыг массив болгон буцаана.
console.log(Object.values(obj)); // Гарц: ["John", 30]

// 3.3 Object.entries(obj)
// Returns an array of key-value pairs.
// Түлхүүр-утга хосыг массив болгон буцаана.
console.log(Object.entries(obj)); // Гарц: [["name", "John"], ["age", 30]]

// -------------------------------------> 4. Тоон аргууд (Number Methods)

// 4.1 toFixed(digits)
// Formats a number to a fixed number of decimal places.
// Тооноос тодорхой орон хүртэл засаад мөр хэлбэрээр буцаана
let num = 3.14159;
console.log(num.toFixed(2)); // Гарц: "3.14"

// 4.2 parseInt(str)
// Parses a string and returns an integer.
// Мөрийг бүхэл тоо болгон хувиргана.
console.log(parseInt("42")); // Гарц: 42

//4.3 parseFloat(str)
// Parses a string and returns a floating-point number.
// Мөрийг бутархай тоо болгон хувиргана.
console.log(parseFloat("3.14")); // Гарц: 3.14

// -------------------------------------> 5. Огноо, цагийн аргууд (Date Methods)

// 5.1 Date.now()
// Returns the number of milliseconds since January 1, 1970.
// 1970 оны 1 сарын 1-ээс хойшхи миллисекундийг буцаана.
console.log(Date.now()); // Жишээ гарц: 1701359123000 (өөрчлөгдөнө)

// 5.2 getFullYear()
// Returns the year of the specified date.
// Одоогийн оныг буцаана.
let now = new Date();
console.log(now.getFullYear()); // Гарц: 2024 (жишээ)

// 5.3 getMonth()
// Returns the month (0-11) of the specified date.
// Одоогийн сарын индексийг (0-11) буцаана.
console.log(now.getMonth()); // Гарц: 11 (Арваннэгдүгээр сар)

// -------------------------------------> 6. Математикийн аргууд (Math Methods)

// 6.1 Math.max()
// Returns the largest of the given numbers.
// Өгөгдсөн тоонууд дундаас хамгийн ихийг буцаана.
console.log(Math.max(1, 5, 10)); // Гарц: 10

// 6.2 Math.min()
// Returns the smallest of the given numbers.
// Өгөгдсөн тоонууд дундаас хамгийн багаг буцаана.
console.log(Math.min(1, 5, 10)); // Гарц: 1

// 6.3 Math.random()
// Returns a random number between 0 (inclusive) and 1 (exclusive).
// 0-ээс 1-ийн хооронд санамсаргүй тоо буцаана.
console.log(Math.random()); // Гарц: 0.657 (жишээ)
