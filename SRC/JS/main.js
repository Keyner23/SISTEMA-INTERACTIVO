
const buttonValidation = document.getElementById("button-validation")   //we get the id of the verify button and make it a variable
let menssage = document.getElementById("menssage")//we bring the space where the message will be created and make it a variable

//function so that the input does not accept values ​​other than numbers
function block(e) {
    if (['e', 'E', '+', '-', ',', '.'].includes(e.key)) {
        e.preventDefault();
    }
}
//function to not accept numbers in the input
function blockNumber(e) {
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(e.key)) { //we block the following keyboard values
        e.preventDefault();
    }
}
//validate button function
buttonValidation.addEventListener("click", function () {
    const nameValue = document.getElementById("name-value").value //we get the value of the name input using the id and make it a variable
    const ageValue = document.getElementById("age-value").value // we get the value of the age input using the id and make it a variable

    if (ageValue.length === 0 || nameValue.trim().length === 0) { //we validate if the field is empty
        menssage.innerHTML = "DEBES LLENAR TODOS LOS CAMPOS"
    }
    else if (ageValue < 18) { //if the age is less than 18 we show the respective message
        menssage.innerHTML = `Hola ${nameValue}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
    }
    else{ //if not greater and we show the other message
        menssage.innerHTML = `Hola ${nameValue}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
    }
    document.getElementById("name-value").value = "" //we clean the inputs
    document.getElementById("age-value").value = ""
})
