const firebase = require("firebase");
const config = require('config')

const firebase_config = config.get('firebase')

firebase.initializeApp(firebase_config);
  
const db = firebase.firestore();

const settings = { timestampsInSnapshots: true };
db.settings(settings);

const list =  (collection) => {
    return db.collection(collection).get()
        .then((querySnapshot) => {
            let result = [] 
            querySnapshot.forEach((doc) => {
                result.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            return result
        });
}

const find = async (collection, id) => {
    return await db.collection(collection).doc(id).get()
        .then(doc => {
            if (doc.exists) {
                return doc.data()
            } else {
                console.log("No such document!");
            }
        }).catch(error => {
            console.log("Error getting document:", error);
        })
}

const add = (collection, value) => {
    return db.collection(collection).add(value)
        .then((docRef) => {
            return { 
                id: docRef.id
            };
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

const update = (collection, id, value) => {
    db.collection(collection).doc(id).update(value)
        .then(() => {
            console.log("Document successfully updated!")
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
}

const remove = (collection, id) => {
    db.collection(collection).doc(id).delete()
    .then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

module.exports.add = add
module.exports.list = list
module.exports.find = find
module.exports.update = update
module.exports.remove = remove