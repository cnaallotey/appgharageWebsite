
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const app = express()
const path = require('path');
const history = require('connect-history-api-fallback');

app.use(cors())

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/sendmail', (req, res) =>{
    let mailOptions = req.body
    console.log(mailOptions)

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2866ca71c592bd",
    pass: "ce2e078e9dde04"
  },
  tls:{
      rejectUnauthorized:false
  }
});
transport.sendMail(mailOptions, (err, info) => {
         if (err) {
           console.log(err)
         } else {
           console.log('Mail has been sent ');
         }
         });
})



const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`App is running on ${port}`);
});