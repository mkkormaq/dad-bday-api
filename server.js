const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const bDays = {
    'frank':{
        'birthday': '1960_05_07',
        'team': 'Penn State',
        'beer': 'Guinness'
    },
    'ron':{
        'birthday': '1957_09_14',
        'team': 'UGA',
        'beer': 'Classic City Lager'
    },
    'no dad':{
        'birthday': 'not born',
        'team': 'no team',
        'beer': 'heineken'
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/api', (req, res)=>{
    res.json(bDays);
})

app.get('/api/:name', (req, res)=>{

    const name = req.params.name.toLowerCase();
    if (bDays[name]){
        res.json(bDays[name])
    }
    else{
        res.json(bDays['no dad'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is now running on port ${PORT}`)
})