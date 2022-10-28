//type aliases
type combinable = number | string; //aliased num || string union
type conversionDescriptor = "as-text" | "as-number"; //aliased string literal

const combine = (
  input1: combinable,
  input2: combinable,
  resultConversion: conversionDescriptor //string literal type
) => {
  let result: combinable; //union > result can be type num or string
  typeof input1 === "number" &&
  typeof input2 === "number" &&
  resultConversion === "as-number"
    ? (result = input1 + input2) //returns number
    : (result = input1.toString() + input2.toString()); //returns string
  return result;
};

const combineAges = combine(20, 21, "as-number");
console.log(combineAges);

const combineAgesS = combine(20, 21, "as-text");
console.log(combineAgesS);

const combineNames = combine("allan", "kilavuka", "as-text");
console.log(combineNames);
