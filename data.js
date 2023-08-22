document.addEventListener("DOMContentLoaded", function () {
    const inputValue = localStorage.getItem("inputValue");
    if (inputValue) {
        document.getElementById('data').innerHTML = inputValue;
    }
});