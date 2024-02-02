// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector("#list");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const prodValue = document.getElementById("product");
    const qntyValue = document.getElementById("qty");
    const newLi = document.createElement("li");
    newLi.innerText = `${prodValue.value} ${qntyValue.value}`;
    list.append(newLi);
    form.reset();
}) 