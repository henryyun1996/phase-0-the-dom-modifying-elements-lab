// Write your code here!
const main = document.getElementById("main");
main.remove();

let newHeader = document.createElement("h1");
document.body.append(newHeader);
newHeader.id = "victory"

newHeader.innerHTML = "Henry is the champion"