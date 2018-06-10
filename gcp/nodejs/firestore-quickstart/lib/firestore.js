const firebase = require("firebase");
const config = require('config');
const firebaseConfig = config.firebase

firebase.initializeApp({
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    projectId: firebaseConfig.projectId
});

const settings = {
    timestampsInSnapshots: true
};
const db = firebase.firestore();
db.settings(settings);


const add = (table, value) => {
    db.collection(table).add(value)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

module.exports.add = add