let express = require("express")
let app = express()
let mongoose = require("mongoose")
let bodyparser = require("body-parser")
const bcrypt = require("bcrypt");
const passport = require("passport");
const expressSession = require("express-session");

//! Middleware
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(passport.initialize());
app.use(expressSession({secret:"secret", resave:false, saveUninitialized:false}))
app.use(passport.session());



//! Database

const User = require("./database/user")



async function main() {
    try {
        await mongoose.connect('mongodb+srv://raghav:raghav2004@cookie4u.siukjxe.mongodb.net/?retryWrites=true&w=majority&appName=cookie4u');
       
        console.log("Connected to database");
    } catch (error) {
        console.error("Error:", error);
    }
}
main()
//! Passport js
const { initializePassport,isAuthenticated } = require("./passport-config");
initializePassport(passport);

app.get("/", (req,res)=>{
res.send("Hello world")
})

app.get("/login", (req,res)=>{
    res.render("login.ejs")
})

app.post("/login", passport.authenticate("local", {failureRedirect:"/register", successRedirect:"/movies"}), (req,res)=>{

})

app.get("/register", (req,res)=>{
    res.render("register.ejs");
})
app.post("/register", async (req, res) => {
    
       const user = await User.findOne({username:req.body.username});
       if(user){
        return res.status(404).send("User already exists");
       }
       else{
        const newuser = await User.create(req.body)
        
        res.redirect("/login")
       }
    
    
});

app.listen(3000)
