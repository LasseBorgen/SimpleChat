import Chat from './Chat.js'

onload = initPage

function initPage() {
    document.querySelector("#login").addEventListener("click", googleLogin)
}

async function googleLogin() {
    
    const provider = new firebase.auth.GoogleAuthProvider()
    const user = await firebase.auth().signInWithPopup(provider) //TODO--Try catch

    if (user) {
        fetch('/chat.html')
            .then(response => response.text())
            .then(chatHtml => document.querySelector(".main-container").innerHTML = chatHtml)
            .then(() => Chat.initChat(user))
    }
}