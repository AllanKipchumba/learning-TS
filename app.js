var add = function (n1, n2, showResult, phrase) {
    var result = n1 + n2;
    showResult ? console.log(phrase + result) : console.log(result);
};
var num1 = 5;
var num2 = 2.5;
var printResult = false;
var resultPhrase = "Result is ";
var result = add(num1, num2, printResult, resultPhrase);
// console.log(result);
