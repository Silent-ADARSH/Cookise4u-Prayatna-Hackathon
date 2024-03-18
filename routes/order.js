let express = require("express")
let bodyParser =require("body-parser")

//!Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/products', (req, res) => {
    const { name, price } = req.body;

    
    console.log('New product added:', { name, price });

    // Send a response
    res.status(201).json({ message: 'Product added successfully' });
});


app.get("/", (req,res)=>{
    res.send("hello wplrd")
})




app.listen(3000)
