console.log("hei hei!")
const express = require('express');

const app = express();


const bodyParser = (req, res, next) => {
    if (req.method === 'POST'){
         // get access to email, password, password confirmation
        req.on('data', data => {
        const parsed = data.toString('utf8').split('&');
        const formData = {};
        for (let pair of parsed){
            const [key, value] = pair.split('=');
            formData[key] = value;
        }
        req.body = formData;
        next();
    });
    } else {
        next();
    }
};


//home endpoint
app.get('/', (req, res) => {
    res.send(`
    <div>
    <form method="POST">
    <input name="email" placeholder="email" />
    <input name="password" placeholder="password" />
    <input name="passwordConfirmation" placeholder="password confirmation" />
    <button>Sign Up</button>
    </form>
    </div>
    
    `);
});

app.post('/', bodyParser, (req, res) =>{
   console.log(req.body);
    res.send('Account created!');
});



//comment endpoint
app.get('/comment', (req, res)=>{
    res.send(`
    <div>
        <form method="POST">
            <input name="comment" type="text" placeholder="Add a public comment.">
            <button>Comment</button>
        </form>
    </div>
    `);
});

app.post('/comment', (req, res) => {
    req.on('data', data => {
        const parsed = data.toString('utf8').split('&');
        const formData = {};
        for (let pair of parsed){
            const [key, value] = pair.split('=');
            formData[key] = value;
        }
        console.log(formData);
    });
    res.send('Posted comment!');
});


//message endpoint
app.get('/message', (req, res)=>{
    res.send(`
    <div>
        <form method="POST">
            <input name="message" type="text" placeholder="Write a message.">
            <button>Send</button>
        </form>
    </div>
    `);
});


app.post('/message', bodyParser, (req, res)=>{
    console.log(req.body);
    res.send('message received!');
})


app.listen(3000, () =>{
    console.log('listening');
});