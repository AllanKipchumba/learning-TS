var combine = function (input1, input2, resultConversion //string literal type
) {
    var result; //union > result can be type num or string
    typeof input1 === "number" &&
        typeof input2 === "number" &&
        resultConversion === "as-number"
        ? (result = input1 + input2) //returns number
        : (result = input1.toString() + input2.toString()); //returns string
    return result;
};
var combineAges = combine(20, 21, "as-number");
console.log(combineAges);
var combineAgesS = combine(20, 21, "as-text");
console.log(combineAgesS);
var combineNames = combine("allan", "kilavuka", "as-text");
console.log(combineNames);
