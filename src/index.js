import "babel-polyfill";
import app from './app';
import {} from 'dotenv/config';

const port = process.env.PORT || 3000;

async function startServer () {
    await app.listen(port);
    console.log(`Running on port: ${port}`);
}

startServer();
