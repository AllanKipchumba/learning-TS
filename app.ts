const combine = (
  input1: number | string,
  input2: number | string,
  resultConversion: "as-text" | "as-number" //string literal type
) => {
  let result: number | string; //union > result can be type num or string
  typeof input1 === "number" &&
  typeof input2 === "number" &&
  resultConversion === "as-number"
    ? (result = input1 + input2)
    : (result = input1.toString() + input2.toString());
  return result;
};

const combineAges = combine(20, 21, "as-number");
console.log(combineAges);

const combineAgesS = combine(20, 21, "as-text");
console.log(combineAgesS);

const combineNames = combine("allan", "kilavuka", "as-text");
console.log(combineNames);
