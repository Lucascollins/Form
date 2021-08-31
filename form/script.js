const fields = document.querySelectorAll("[required]")

function ValidateField(field) {
    //logica para verificar se existem erros
    function verifyErrors() {
        let FoundError = false;

        for (let error in field.validity) {
            //se não customError
            // então verifica se tem erro
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }
        return foundError;
    }
}

function customMessage(typeError) {
    const messages = {
        text: {
            valueMissing: "Por favor,preencha este campo"
        },
        email: {
            valueMissing: "Email é obrigatório",
            typeMismatch: "Por favor,preecha um email válido"
        }
    }
    return messages[field.type[typeError]]
}

function setCustomMessage(message) {
    const spanError = field.parentNode.querySelector("span.error")
    if (message) {
        spanError.classlist.add("active")
        spanError.InnerHTML = message
    } else {
        spanError.classList.remove("active")
        spanError.InnerHTML = ""
    }
}
return function() {
    const error = verifyErrors()
    if (error) {
        const message = customMessage(error)
        field.style.borderColor = "red"
        setCustomMessage(message)
    } else {
        field;
        style.borderColor = "green"
        setCustomMessage()
    }
}

function customValidation(event) {
    const field = event.target
    const validation = ValidateField(field)

    validition()
}
for (field of fields) {
    field.addEventListener("invalid", event => {
        //eliminar o bubble
        event.preventDefault()
        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}
document.querySelector("form")
    .addEventListener("submit", event => {
        console.log("enviar o formulário")
            //não vai enviar o formuçário
        event.preventDefault()
    })