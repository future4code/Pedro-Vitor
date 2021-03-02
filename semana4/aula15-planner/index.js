function newTask() {
    const userInput = document.getElementById("tarefa")

    if (userInput !== "") {
        const daysOfWeek = document.getElementById("dias-semana")

        switch (daysOfWeek.value) {
            case "domingo":
                domingo.innerHTML += `<li>${userInput.value}</li>`
                break
            case "segunda":
                segunda.innerHTML += `<li>${userInput.value}</li>`
                break
            case "terca":
                terca.innerHTML += `<li>${userInput.value}</li>`
                break
            case "quarta":
                quarta.innerHTML += `<li>${userInput.value}</li>`
                break
            case "quinta":
                quinta.innerHTML += `<li>${userInput.value}</li>`
                break
            case "sexta":
                sexta.innerHTML += `<li>${userInput.value}</li>`
                break
            case "sabado":
                sabado.innerHTML += `<li>${userInput.value}</li>`
                break
        }
    }
}
