const express = require('express')
const app = express() //make app of type backend express

app.listen(3000, () => {
    console.log('Server is running on port 3000'); 
}); 

app.get('/', (req, res) => {
    res.send("Hello from Node API server"); 
});



