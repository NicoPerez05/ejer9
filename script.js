document.addEventListener("DOMContentLoaded", function() {
    const resultDisplay = document.getElementById("resultDisplay");
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = button.textContent;
            if (buttonText === "=") {
                // Aquí puedes realizar el cálculo si lo deseas
                // Por ejemplo: resultDisplay.value = eval(resultDisplay.value);
            } else {
                resultDisplay.value += buttonText;
            }
        });
    });

    resultDisplay.addEventListener("click", function() {
        resultDisplay.value = "";
    });
});


  