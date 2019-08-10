const klunch = require('./index')
var moment = require('moment');
require('moment-timezone');
require('date-utils')
var fs = require('fs');
moment.tz.setDefault("Asia/Seoul");


var today = new Date();
var tyear = today.getFullYear();
var tmonth = today.getMonth() + 1;
var tdate = today.getDate();
// var tdate = '30';

//tomorrow
var tom = Date.tomorrow();
var tomtom = tom.addDays(1);
var tomyear = tom.getFullYear();
var tommonth = tom.getMonth() + 1;
var tomfilename = moment().add(1,"days").format("YYYYMD")
// var filename = moment().format("YYYYMD")
var filename = tyear +""+ tmonth +""+ tdate;
var tomdate = moment().add(1,"days").format("D");

var nothing = "nothing"
var nomeal = "등록된 급식정보가 없습니다."
var nonut = "정보가 없습니다."
console.log('Now Date: '+today);

// var topening = '{\"searchresult\":{\"requesttype\":\"'+'request_date_'+filename+'_'+'today'+'\",\"row\":';
var topening = '{\"searchresult\":{\"list_total_count\":3000\,\"RESULT\":\"success\"\,\"row\":';
// {\"searchresult\":{\"list_total_count\":3000,\"RESULT\":\"success\",\"row\":
var tomopening = '{\"searchresult\":{\"list_total_count\":3000\,\"RESULT\":\"success\"\,\"row\":';
var closing = '}}';

//port3000 listen
var express = require('express');
var app = express();

//root express
app.get('/', function (req, res) {
  var root = fs.readFileSync('./root.html','utf-8');

  res.send(root);
});

//today express
app.get('/time1', function (req, res) {
  var time1 = topening+fs.readFileSync('./data/' + filename + '_' + 'time1' + '.txt','utf-8')+closing;

  res.send(time1);
});
app.get('/time2', function (req, res) {
  var time2 = topening+fs.readFileSync('./data/' + filename + '_' + 'time2' + '.txt','utf-8')+closing;

  res.send(time2);
});
app.get('/time3', function (req, res) {
  var time3 = topening+fs.readFileSync('./data/' + filename + '_' + 'time3' + '.txt','utf-8')+closing;

  res.send(time3);
});

app.get('/nut1', function (req, res) {
  var nut1 = topening+fs.readFileSync('./data/' + filename + '_' + 'nut1' + '.txt','utf-8')+closing;

  res.send(nut1);
});
app.get('/nut2', function (req, res) {
  var nut2 = topening+fs.readFileSync('./data/' + filename + '_' + 'nut2' + '.txt','utf-8')+closing;

  res.send(nut2);
});
app.get('/nut3', function (req, res) {
  var nut3 = topening+fs.readFileSync('./data/' + filename + '_' + 'nut3' + '.txt','utf-8')+closing;

  res.send(nut3);
});

//tomorrow express
app.get('/time1tom', function (req, res) {
  var tomtime1 = tomopening+fs.readFileSync('./data/' + tomfilename + '_' + 'time1' + '.txt','utf-8')+closing;

  res.send(tomtime1);
});
app.get('/time2tom', function (req, res) {
  var tomtime2 = tomopening+fs.readFileSync('./data/' + tomfilename + '_' + 'time2' + '.txt','utf-8')+closing;

  res.send(tomtime2);
});
app.get('/time3tom', function (req, res) {
  var tomtime3 = tomopening+fs.readFileSync('./data/' + tomfilename + '_' + 'time3' + '.txt','utf-8')+closing;

  res.send(tomtime3);
});

app.get('/nut1tom', function (req, res) {
  var tomnut1 = tomopening+fs.readFileSync('./data/' + tomfilename + '_' + 'nut1' + '.txt','utf-8')+closing;

  res.send(tomnut1);
});
app.get('/nut2tom', function (req, res) {
  var tomnut2 = tomopening+fs.readFileSync('./data/' + tomfilename + '_' + 'nut2' + '.txt','utf-8')+closing;

  res.send(tomnut2);
});
app.get('/nut3tom', function (req, res) {
  var tomnut3 = tomopening+fs.readFileSync('./data/' + tomfilename + '_' + 'nut3' + '.txt','utf-8')+closing;

  res.send(tomnut3);
});

app.listen(3000);
console.log('급식정보 표시중 포트 : '+'3000');
