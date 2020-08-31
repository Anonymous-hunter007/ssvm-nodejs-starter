const { Calculate } = require('../pkg/interest_lib.js');
const express = require('express');

const app = express();
const port = process.env.PORT||3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/',function (req,res,next) {
	res.sendFile(__dirname+ '/public/index.html')
})

app.post('/calculate',function (req,res,next) {
	res.send(new String(parseInt(Calculate(req.body.p,req.body.r,req.body.t))- req.body.p))	
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
