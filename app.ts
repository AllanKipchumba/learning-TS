let userInput: unknown; //unknown is preferable to any
let userName: string;

userInput = 5;
userInput = "mark";

typeof userInput === "string" && (userName = userInput);

//never type >> used when you are usre something is never going to occur
// i.e a functon that never returns a value
function generateErrorMessage(message: string, code: number): never {
  throw { message: message, errorCode: code };
} // this fn never returns a value
