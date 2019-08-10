const klunch = require('./index')

var today = new Date();
var yeardata = today.getFullYear();
var monthdata = today.getMonth();
var modifymonthdata = monthdata + 1;
var datedata = today.getDate();
console.log("Now Date: " + today);

var form1 = {};
form1.year = yeardata;
form1.month = modifymonthdata;
form1.day = datedata;
form1.time = 1;
form1.name = '부산고등학교';
form1.phase = 4;

console.log(form1);

const options = {
  autoCode: true,
  autoDomain: true
}

klunch.getLunch(form1, (err, output) => {
  if(err) throw err
  var lunchcode1 = output
}, options)

var express = require('express');
var app = express();

app.get('/lunchcode', function (req, res) {
  res.send(JSON.stringify(lunchcode1));
});

app.listen(3000);
