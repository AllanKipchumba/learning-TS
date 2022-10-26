// const person: {
//   name: string;
//   age: number;
// }
const person: {
  name: string;
  age: number;
  hobbies: string[]; //string array
  role: [number, string]; //tuple
} = {
  name: "allan",
  age: 22,
  hobbies: ["coding", "sports"],
  role: [2, "author"],
};

let favouriteActivities: string[];

console.log(person.name);

person.hobbies.map((hobby) => {
  console.log(hobby.toUpperCase());
});
