function displayName() {
    const nameInput = document.getElementById("nameInput");
    const outputElement = document.getElementById("output");
    
    const name = nameInput.value;
    outputElement.textContent = "Hello, " + name + "!";
}
