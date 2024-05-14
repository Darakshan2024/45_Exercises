// lowercase 
let personName: string = "Darakshan Anjum"
console.log("lowercase:", personName.toLowerCase());

// UPPER CASE

console.log("uppercase:", personName.toUpperCase());

// TITLE CASE

console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));