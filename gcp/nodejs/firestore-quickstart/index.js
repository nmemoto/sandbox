
const firestore = require('./lib/firestore')

firestore.add("users", {
    first: "Ada",
    last: "Lovelace",
    born: 1815
})

firestore.add("users", {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
})