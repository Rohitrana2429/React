function setCount() {
    const countElement = document.getElementById("count");
    let count = Number(countElement.textContent);
    count = count + 1;
    countElement.textContent = count;
}

 const getElementById = document.getElementById("name");
