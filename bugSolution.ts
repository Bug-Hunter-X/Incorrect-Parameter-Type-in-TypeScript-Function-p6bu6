function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access the first element of the array
console.log(greeter(user[0])); // Correct usage

// Solution 2: Handle arrays explicitly (if needed)
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(" ");
}
console.log(greeterArray(user)); // Correct usage with array handling