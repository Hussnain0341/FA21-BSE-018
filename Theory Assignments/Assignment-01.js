// Random string
let randomString = "Hello, World! This is a random string.";

// Applying all string methods
console.log("Original String:", randomString);

console.log("Length:", randomString.length);
console.log("Uppercase:", randomString.toUpperCase());
console.log("Lowercase:", randomString.toLowerCase());
console.log("Substring(7, 12):", randomString.substring(7, 12));
console.log("Replace 'random' with 'amazing':", randomString.replace("random", "amazing"));
console.log("Split by space:", randomString.split(" "));
console.log("Includes 'World':", randomString.includes("World"));
console.log("Index of 'is':", randomString.indexOf("is"));
console.log("Last index of 'is':", randomString.lastIndexOf("is"));
console.log("Char at index 5:", randomString.charAt(5));
console.log("Concatenation:", randomString.concat(" Adding more text."));
console.log("Trimming:", randomString.trim());
console.log("Starts with 'Hello':", randomString.startsWith("Hello"));
console.log("Ends with 'string.':", randomString.endsWith("string."));
console.log("Slice(7, 12):", randomString.slice(7, 12));
console.log("Repeat 3 times:", randomString.repeat(3));

// Random array
let randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Applying all array methods
console.log("\nOriginal Array:", randomArray);

console.log("Length:", randomArray.length);
console.log("Join:", randomArray.join(", "));
console.log("Push(10):", randomArray.concat(10));
console.log("Pop:", randomArray.pop());
console.log("Shift:", randomArray.shift());
console.log("Unshift(0):", randomArray.unshift(0));
console.log("Reverse:", randomArray.reverse());
console.log("Sort:", randomArray.sort());
console.log("Slice(2, 5):", randomArray.slice(2, 5));
console.log("Splice(2, 0, 'a', 'b', 'c'):", randomArray.splice(2, 0, "a", "b", "c"));
console.log("Concat:", randomArray.concat([11, 12, 13]));
console.log("Includes 5:", randomArray.includes(5));
console.log("Index of 7:", randomArray.indexOf(7));
console.log("Last index of 7:", randomArray.lastIndexOf(7));
console.log("Map:", randomArray.map((x) => x * 2));
console.log("Filter > 5:", randomArray.filter((x) => x > 5));
console.log("Reduce:", randomArray.reduce((acc, curr) => acc + curr, 0));
console.log("Every > 0:", randomArray.every((x) => x > 0));
console.log("Some > 10:", randomArray.some((x) => x > 10));
console.log("Find > 3:", randomArray.find((x) => x > 3));
console.log("FindIndex > 3:", randomArray.findIndex((x) => x > 3));
