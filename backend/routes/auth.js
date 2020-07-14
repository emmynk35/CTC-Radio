const https = require('https');
const querystring = require('querystring');
global.globalAuthFlag = false;

module.exports = (app, db) => {

    app.post (
        '/auth/signup',
        async (req, res) => {

            console.log("got the body:", req.body);

            var email = req.body.email;
            var password = req.body.password;

            console.log("email:", email);
            console.log("password:", password);

            // extract username from email
            var username = email.split("@")[0];
            var host = email.split("@")[1];


            // reject if not CTC email
            if (host != "chicagotrading.com") {
                return res.status(400).json({ message: "must have a CTC email"});
            }

            const cityRef = db.collection('users').doc(username);
            const doc = await cityRef.get();
            if (doc.exists) {
                console.log('username already exists');
                return res.status(400).json({ error: "username already exists"});
            }

            // add it in the database
            console.log("adding new user to the DB");
            const newUserRef = db.collection('users').doc(username);
            await newUserRef.set({
                'username': username,
                'password': password
            });

            return res.status(200).json({ new_user: {username: username, password: password}});
        }
    )

    app.post (
        '/auth/signin',
        async (req, res) => {

            console.log("got the body:", req.body);

            var username = req.body.username;
            var password = req.body.password;

            const cityRef = db.collection('users').doc(username);
            const doc = await cityRef.get();
            if (!doc.exists) {
                console.log('username does not exist');
                return res.status(400).json({ error: "username does not exist"});
            }

            var dbpassword = doc.get("password");

            if (password != dbpassword) {
                return res.status(400).json({ error: "incorrect password"});
            }

            req.session.username = username;
            console.log(req.session.username);
            return res.status(200).json({ successful: "user successfully logged in"});
        }
    )

    app.post (
        '/auth/signout',
        async (req, res) => {
            if(!req.session.username){
                console.log("need to login");
                res.redirect('auth/signin');
            }
            req.session.reset();
            res.redirect('/')
        }
    )

    app.post (
        'auth/spotifytoken',
        async(req, res) => {
            if(!req.session.username){
                console.log("need to login");
                res.redirect('auth/signin');
            }
            console.log("got the body:", req.body);
            //client_id
            //response_type
            //redirect_uri
            //state            ignored for now
            //scope
            //show_dialog
            var httpsString = "";
            httpsString  = httpsString + "?client_id=" + req.body.client_id + "&response_type=" + req.body.response_type + "&redirect_uri=" + req.body.redirect_uri + "&scope=" + req.body.scope;
            querystring.encode(httpsString);
            if(!globalAuthFlag){
                https.get(httpsString, (res) =>{
                    
                })
            }
        }
    )



}

    