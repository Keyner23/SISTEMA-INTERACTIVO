
const buttonValidation = document.getElementById("button-validation")
const menssage = document.getElementById("menssage")

function block(e) {
    if (['e', 'E', '+', '-', ',', '.'].includes(e.key)) {
        e.preventDefault();
    }
}

function blockNumber(e) {
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(e.key)) {
        e.preventDefault();
    }
}

buttonValidation.addEventListener("click", function () {
    const nameValue = document.getElementById("name-value").value
    const ageValue = document.getElementById("age-value").value

    if (ageValue.length === 0) {
        menssage.innerHTML = "DEBES LLENAR TODOS LOS CAMPOS"
    }
    else if (nameValue.trim().length === 0) {
        menssage.innerHTML = "DEBES LLENAR TODOS LOS CAMPOS"
    }
    else if (ageValue < 18) {
        menssage.innerHTML = `Hola ${nameValue}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
    }
    else if (ageValue >= 18) {
        menssage.innerHTML = `Hola ${nameValue}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
    }
})
