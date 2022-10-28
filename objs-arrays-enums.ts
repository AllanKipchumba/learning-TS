// const person: {
//   name: string;
//   age: number;
// }
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; //string array
//   role: [number, string]; //tuple
// } = {
//   name: "allan",
//   age: 22,
//   hobbies: ["coding", "sports"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "allan",
  age: 22,
  hobbies: ["coding", "sports"],
  role: Role.ADMIN,
};

person.hobbies.map((hobby) => {
  console.log(hobby.toUpperCase());
});

person.role === Role.ADMIN && console.log("user is admin");
