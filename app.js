const express = require("express")
const app = express()
const dotenv = require("dotenv").config()

const port = process.env.PORT || 4001
app.listen(port)
console.log(`Server Listening to`,port)

//View Engine Configuration
app.set("view engine", "ejs")

//Setting public files
app.use(express.static("public"))

app.get("/", (req,res) => {
    res.render("home")
})

app.get("/create-task", (req,res) => {
    res.render("createTask")
})

app.use((req,res) => {
    res.status(404).render("404")
})