const express = require("express")
const firebase = require("firebase")

const app = express()
const port = 3000

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkwIEuZEf8N3cHJSp3IlqODBY7DMP8IZY",
    authDomain: "exercise-five-90fab.firebaseapp.com",
    projectId: "exercise-five-90fab",
    storageBucket: "exercise-five-90fab.firebasestorage.app",
    messagingSenderId: "46563974192",
    appId: "1:46563974192:web:524d84b750f957991ce1f5"
}

firebase.initializeApp(firebaseConfig)

const indexRoute = require("./routes/index.js")
const createPostRoute = require("./routes/createPost.js")
const singlePostRoute = require("./routes/singlePost.js")

app.use("/", indexRoute)
app.use("/create", createPostRoute)
app.use("/post", singlePostRoute)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
