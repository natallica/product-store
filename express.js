const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const products = {
    1: {
           id:'1',
           name:'shoe',
           price:60
        },
    2: {
            id:'2',
            name:'blouse',
            price:120
        },
    3: {
            id:'3',
            name:'pants',
            price:5,
        }
 }

app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('hello World');
});

app.get('/products', (req, res) => {    
    res.send(products);
});

app.listen(port, () => {
    console.log(`app is running at port ${port}`);
});