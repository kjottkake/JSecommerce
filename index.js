console.log("hei hei!")
const express = require('express');

const app = express();


const bodyParser = (req, res, next) => {
    if (req.method === 'POST'){
         // get access to email, password, passwordconfirmation
        req.on('data', data => {
        const parsed = data.toString('utf8').split('&');
        const formData = {};
        for (let pair of parsed){
            const [key, value] = pair.split('=');
            formData[key] = value;
        }
        console.log(formData);
    });
    } 
};

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

app.post('/', (req, res) =>{
    // get access to email, password, passwordconfirmation
    req.on('data', data => {
        const parsed = data.toString('utf8').split('&');
        const formData = {};
        for (let pair of parsed){
            const [key, value] = pair.split('=');
            formData[key] = value;
        }
        console.log(formData);
    });
    //test function
    // req.on('data', data =>{
    //     const parsed = data.toString('utf8');
    //     console.log(parsed);
    // })
    res.send('Account created!');
});


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

app.listen(3000, () =>{
    console.log('listening');
});