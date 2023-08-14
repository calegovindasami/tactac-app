import express from 'express'
import * as dotenv from 'dotenv'

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>');
});

app.listen(PORT, () => {
    console.log()
})