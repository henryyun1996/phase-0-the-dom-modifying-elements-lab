// Write your code here!
const main = document.getElementsByTagName("main")[0];
const firstMain = main.querySelector("main");
main.remove("firstMain");

const element = document.createElement("h1");
document.body.append(element);
const newHeader = document.getElementsByTagName("h1");

element.id = "victory";

element.innerHTML = "Henry is the Champion!";