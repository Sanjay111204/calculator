function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function appendValue(value) {
    document.getElementById("result").value += value;
}

function calculateResult() {
    let result = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(result);
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}
