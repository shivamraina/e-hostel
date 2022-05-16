const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const guest = require('./routes/guest')
const attendant = require('./routes/attendant')
const student = require('./routes/student')
const complaint = require('./routes/complaint')
const fees = require('./routes/fees')
const { Student } = require('./models/student')

// const db = 'mongodb://localhost/e-hostel'

mongoose.connect('mongodb+srv://shivam:Avengers123@mycluster.eafse.mongodb.net/e-hostel?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to Database'))
    .catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/guest', guest);
app.use('/api/attendant', attendant);
app.use('/api/student', student);
app.use('/api/complaint', complaint);
app.use('/api/fees', fees);

app.get('/api/bookhostel', async(req, res) => {
    console.log('req')
    try {
        const user = await Student.find({bookHostel: 'true'});
        res.send(user)
    }
    catch(ex) {
        res.send(ex.message);
    }
})

app.post('/api/bookhostel', async(req, res) => {
    try{
        const user = await Student.findOne({name: req.body.name});
        console.log(user);
        user.bookHostel = 'true';
        await user.save();
    }
    catch(ex) {
        res.send(ex.message);
    }
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
	});
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port = ${port}`));