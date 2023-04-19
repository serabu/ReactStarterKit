// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')

app.use(express.static('public'));

app.use(cors({
    origin: 'http://localhost:3000'
}));
const port =  process.env.port ||4000;

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

 
app.listen(port, () => console.log(`Connected on port ${port}!`));

