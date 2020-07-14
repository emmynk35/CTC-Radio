const express = require('express');
const app = express();

const admin = require('firebase-admin');
const serviceAccount = require('./config/ctc-radio-283315-71a98798e082.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.get(
    '/',
    (req, res) => {
        return res.status(200).json({ message: "Application is running"});
    }
)

app.listen(3000, () => {
    console.log("Its alive!");
})


