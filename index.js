console.log("hei hei!")
const express = require('express');

const app = express();

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
    res.send('Account created!');
});


app.get('/comment', (req, res)=>{
    res.send(`
    <div>
        <form method="POST">
            <input type="text" placeholder="Add a public comment.">
            <button>Comment</button>
        </form>
    </div>
    `
    )
});

app.post('/comment', (req, res) => {
    // get comment
    req.on('data', data => {
        const parsed = data.toString('utf8').split('&');
        const formData = {};
        console.log(parsed);
        // for (let pair of parsed) {
        //     const [key, value] = pair.split('=');
        //     formData[key] = value;
        // }
        console.log(formData);
    });
    res.send('Posted comment!');
});

app.listen(3000, () =>{
    console.log('listening');
});