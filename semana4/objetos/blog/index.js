const arrayRequirements = []

const contentShow = () => {
    const userInputTitle = document.getElementById("titulo-post").value
    const userInputAuthor = document.getElementById("autor-post").value
    const userInputContent = document.getElementById("conteudo-post").value

    const requirements = {
        title: userInputTitle,
        author: userInputAuthor,
        content: userInputContent
    }
    if (userInputTitle !== "" && userInputAuthor !== "" && userInputContent !== "") {
        arrayRequirements.push(requirements)
        post.innerHTML += `<div>
        <li>${userInputTitle}</li>
        <p>${userInputContent}</p>
        <p>${userInputAuthor}</p>
    </div>` // Fagner salvando vidas
    } else {
        alert("Please fill out the forms.")
    }
}