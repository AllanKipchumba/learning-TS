var add = function (n1, n2) {
    return n1 + n2;
};
//void function type > has no return vaue
var printResult = function (num) { return console.log("Result is ".concat(num)); };
printResult(add(5, 2));
//function types
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
