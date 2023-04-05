function displayValue() {
    var inputVal = localStorage.getItem("inputValue");
    document.getElementById("displayField").textContent = "WELCOME " + inputVal;
}