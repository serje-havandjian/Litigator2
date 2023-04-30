const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log("req", req)
  res.send([
    {
        "id": 1,
        "title": "Ryan vs. State of Kentucky",
        "trialDate": "5/27/23",
        "jurisdiction": {
            "id": 1,
            "name": "Los Angeles"
        },
        "opposingCounsels": [
            {
                "id": 1,
                "name": "Clark Hill LLP"
            }
        ]
    }
]);
});

const database = {
    deadlines: {
        all: () => {
            return ["deadline1", "deadline2", "deadline3"]
        }
    }
}

const deadlinesIndexHandler = (req, res) => {
    const deadlines = database.deadlines.all()
    return res.send(deadlines)
}
app.get('/deadlines', deadlinesIndexHandler)



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// const loginRouter = require('./login');
// app.use('/api/login', loginRouter);
