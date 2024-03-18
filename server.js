let express = require("express")
let app = express()

//! Middleware
app.set("view engine", "ejs")
app.use(express.static('public'))


app.get("/", (req,res)=>{
    res.render("login.ejs")
})


app.listen(3000)
