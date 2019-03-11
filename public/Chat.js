let posts = []
let userName

function initChat(user) {
    const db = firebase.firestore()
    const postsCollection = db.collection('posts')
    userName = user.user.displayName

    postsCollection.onSnapshot(snapshot => { //TODO---Error handling
        posts = []
        console.log(snapshot.docChanges())
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
            console.log('Post success!')
        })
        .catch(function (error) { //TODO---PROPER Error handling
            console.error('Post failure: ', error)
        })
}

function buildString() {
    let result = ''

    for(let post of posts) {
        result += `${post.from}: ${post.content}\n`
    }

    return result
}

export default { initChat }