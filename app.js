var userInput; //unknown is preferable to any
var userName;
userInput = 5;
userInput = "mark";
typeof userInput === "string" && (userName = userInput);
//never type >> used when you are usre something is never going to occur
// i.e a functon that never returns a value
function generateErrorMessage(message, code) {
    throw { message: message, errorCode: code };
} // this fn never returns a value
generateErrorMessage("an error occured!", 500);
