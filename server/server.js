let express = require('express');
const PORT = 5000;
//SCREAMING_SNAKE_CASE (PORT)
//make a server! Serve my static html, css, js
let app = express(); //make a server please!

let jokes = [{
        intro: 'why did the monkey fall out of the tree?',
        punchline: 'because he died'
    },
    {
        intro: 'how do you hide an elephant in a strawberry patch?',
        punchline: 'paint its toenails red'
    }
];

//localhost:5000/joke
//arrow functions
app.get('/joke', (req, res) => {
    //good servers always respond!
    res.send(jokes);
})

//serve our HTML,CSS,JS, etc. to the client
app.use(express.static('server/public'));


//listen for connections on port 5000
app.listen(PORT, () => {
    console.log('app is running on port: ', PORT);
})
//CTRL+C to quit out of node in terminal