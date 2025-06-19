
const buttonValidation = document.getElementById("button-validation")

const menssage = document.getElementById("menssage")

buttonValidation.addEventListener("click", function () {
    
    const nameValue = document.getElementById("name-value").value
    const ageValue = document.getElementById("age-value").value

    if (ageValue < 18) {
        menssage.innerHTML = "menor"
    } else {
        menssage.innerHTML = "mayor"
    }
})