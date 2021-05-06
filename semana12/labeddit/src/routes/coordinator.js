export const goToLoginPage = (history) => {
    history.push("/")
}

export const goToPostPage = (history, id) => {
    history.push(`/feed/${id}`)
}

export const goToSignUpPage = (history) => {
    history.push("/register")
}

export const goToFeedPage = (history) => {
    history.push("/feed")
}