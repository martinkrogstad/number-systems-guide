
function convertNumber() {
    const input = document.getElementById("decimal-input");
    const value = input.value.trim();

    
if (value === "" || !/^\d+$/.test(value)) {
    document.getElementById("binary-result").textContent = "-";
    document.getElementById("octal-result").textContent = "-";
    document.getElementById("hex-result").textContent = "-";

    alert("Please enter a valid non-negative whole number.");
    return;
}


    const decimal = BigInt(value);

    document.getElementById("binary-result").textContent =
        decimal.toString(2);

    document.getElementById("octal-result").textContent =
        decimal.toString(8);

    document.getElementById("hex-result").textContent =
        decimal.toString(16).toUpperCase();
}

document.getElementById("convert-button")
    .addEventListener("click", convertNumber);


document.getElementById("decimal-input")
    .addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            convertNumber();
        }
    });
