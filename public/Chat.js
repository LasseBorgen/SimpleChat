let posts = []
let currentUser
let userName

function initChat(user) {
    //const app = firebase.app()
    const db = firebase.firestore()
    const postsCollection = db.collection('posts')
    currentUser = user //Det kan være, at jeg får brug for den i fremtiden...
    userName = user.user.displayName

    postsCollection.onSnapshot(snapshot => { //TODO---Try-catch
        posts = []
        snapshot.forEach(doc => {
            const data = doc.data()
            posts.push({
                from: data.from,
                content: data.content,
                id: data.id
            })
        })
        posts.sort((a, b) => a.id - b.id)
        document.querySelector('#chatroom').innerHTML = buildString()
    })

    document.querySelector('#button-submit').addEventListener('click', () => {onSubmit(postsCollection)})
    document.querySelector('#display-name-input').value = userName
}

function onSubmit(postsCollection) {
    const postId = parseInt(posts[posts.length - 1].id) + 1
    postsCollection.doc('post_' + postId).set({
            from: document.querySelector('#display-name-input').value,
            content: document.querySelector('#message-input').value,
            id: postId
        })
        .then(function () {
            console.log('Booyah!')
        })
        .catch(function (error) {
            console.error('Åhh åhhh~: ', error)
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