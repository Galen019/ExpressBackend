import express, { Request, Response } from 'express';
import './models/syncModels';

const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});