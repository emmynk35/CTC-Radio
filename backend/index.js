const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());

const admin = require('firebase-admin');
const serviceAccount = require('./config/ctc-radio-eb90386e8175.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const auth_routes = require('./routes/auth');

auth_routes(app, db);

app.get(
    '/',
    (req, res) => {
        return res.status(200).json({ message: "Application is running"});
    }
)

app.listen(3000, () => {
    console.log("Its alive!");
})


