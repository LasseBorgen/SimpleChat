let posts = []
let currentUser

function initChat(user) {
    //const app = firebase.app()
    const db = firebase.firestore()
    const postsCollection = db.collection('posts')
    currentUser = user

    postsCollection.onSnapshot(snapshot => { //TODO---Try-catch
        posts = []
        snapshot.forEach(doc => {
            const data = doc.data()
            posts.push({
                from: data.from,
                content: data.content,
                id: doc._key.path.segments[6]
            })
        })
        document.querySelector('#chatroom').innerHTML = buildString()
    })

    document.querySelector('#button-submit').addEventListener('click', () => {onSubmit(postsCollection)})

}

function onSubmit(postsCollection) {
    postsCollection.doc('' + (parseInt(posts[posts.length - 1].id) + 1)).set({
            from: currentUser.user.displayName, //TODO---Find den rigtige titel
            content: document.querySelector('#message-input').value
        })
        .then(function () {
            console.log("Booyah!")
        })
        .catch(function (error) {
            console.error("Åhh åhhh~: ", error)
        })
}

function buildString() {
    let thisString = ''

    for(let post of posts) {
        thisString += `${post.from}: ${post.content}\n`
    }

    return thisString
}

export default { initChat }