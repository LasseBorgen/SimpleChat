const functions = require('firebase-functions')

exports.createPost = functions.firestore.document('posts/{postId}').onCreate((snap, context) => {
    const post = snap.data();
    console.log(post)
    content = snap.data().content
    const regExp = /Microsoft|Google|Apple/i
    content = content.replace(regExp, '********')
    
    return snap.ref.set({
        content: content
    }, { merge: true });

    
})