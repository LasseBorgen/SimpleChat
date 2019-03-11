const functions = require('firebase-functions')

//TODO---Opdateringer burde nok ske gennem HTTP-requests i stedet for direkte at tilgå databasen
//Lige nu sker opdateringen -> brugerne får besked gennem deres snapshot -> Den her trigger opdaterer igen ->
//Brugerne får besked for 2. gang
exports.createPost = functions.firestore.document('posts/{postId}').onCreate((snap, context) => {
    content = snap.data().content
    content = content.replace(/Microsoft|Google|Apple/gi, '********')
    
    return snap.ref.set({
        content: content
    }, { merge: true });  
})