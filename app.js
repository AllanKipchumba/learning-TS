var combine = function (input1, input2) {
    var result;
    typeof input1 === "number" && typeof input2 === "number"
        ? (result = input1 + input2)
        : (result = input1.toString() + input2.toString());
    return result;
};
var combineAges = combine(20, 21);
console.log(combineAges);
var combineNames = combine("allan", "kilavuka");
console.log(combineNames);
