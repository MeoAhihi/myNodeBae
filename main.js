"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_js_1 = require("./Person.js");
function main() {
    var person = new Person_js_1.Person("John", 25);
    console.log(person.greet());
}
main();
