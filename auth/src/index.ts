import express from 'express'
import { json } from 'body-parser'

const app = express();
app.use(json());

app.listen(3000, () => {
    console.log('Listening to port 3000');
    // add hello world to front page
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
});