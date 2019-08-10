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
var tom = Date.tomorrow();
var tomtom = tom.addDays(1);
var tomyear = tom.getFullYear();
var tommonth = tom.getMonth() + 1;
var tomfilename = moment().add(1,"days").format("YYYYMD")
var tomdate = moment().add(1,"days").format("D")
var filename = tyear + "" + tmonth + "" + tdate;
console.log(tomfilename);
console.log("k-lunch 급식 정보 인입 프로그램");
console.log("=========================================================");
console.log("아래 date값을 현재 날짜와 확인해 주십시오.");
console.log();
console.log("Now Date: " + today);

const form1 = {
  year: tyear,
  month: tmonth,
  day: tdate,
  time: 1, // Breakfast = 1, Lunch = 2, Dinner = 3
  name: '부산고등학교',
  phase: 4 // Elementary School = 2, Middle School = 3, High School = 4
}
const form2 = {
  year: tyear,
  month: tmonth,
  day: tdate,
  time: 2, // Breakfast = 1, Lunch = 2, Dinner = 3
  name: '부산고등학교',
  phase: 4 // Elementary School = 2, Middle School = 3, High School = 4
}
const form3 = {
  year: tyear,
  month: tmonth,
  day: tdate,
  time: 3, // Breakfast = 1, Lunch = 2, Dinner = 3
  name: '부산고등학교',
  phase: 4 // Elementary School = 2, Middle School = 3, High School = 4
}

const form1tom = {
  year: tomyear,
  month: tommonth,
  day: tomdate,
  time: 1, // Breakfast = 1, Lunch = 2, Dinner = 3
  name: '부산고등학교',
  phase: 4 // Elementary School = 2, Middle School = 3, High School = 4
}
const form2tom = {
  year: tomyear,
  month: tommonth,
  day: tomdate,
  time: 2, // Breakfast = 1, Lunch = 2, Dinner = 3
  name: '부산고등학교',
  phase: 4 // Elementary School = 2, Middle School = 3, High School = 4
}
const form3tom = {
  year: tomyear,
  month: tommonth,
  day: tomdate,
  time: 3, // Breakfast = 1, Lunch = 2, Dinner = 3
  name: '부산고등학교',
  phase: 4 // Elementary School = 2, Middle School = 3, High School = 4
}

console.log(form1);
console.log();

const options = {
  autoCode: true,
  autoDomain: true
}

//급식정보 저장
klunch.getLunch(form1, (err, output) => {
  if (err) throw err
  fs.writeFileSync("./data/" + filename + "_" + "time1" + ".txt", output);
  console.log('time1 데이터 인입 시작');
  console.log(output);
  console.log('time1 데이터 인입 완료');
}, options)
klunch.getLunch(form2, (err, output) => {
  if (err) throw err
  fs.writeFileSync("./data/" + filename + "_" + "time2" + ".txt", output);
  console.log('time2 데이터 인입 시작');
  console.log(output);
  console.log('time2 데이터 인입 완료');
}, options)
klunch.getLunch(form3, (err, output) => {
  if (err) throw err
  fs.writeFileSync("./data/" + filename + "_" + "time3" + ".txt", output);
  console.log('time3 데이터 인입 시작');
  console.log(output);
  console.log('time3 데이터 인입 완료');
}, options)

//영양정보 저장
klunch.getNutrients(form1, (err, output) => {
  if (err) throw err
  fs.writeFileSync("./data/" + filename + "_" + "nut1" + ".txt", output);
  console.log('nut1 데이터 인입 시작');
  console.log(output);
  console.log('nut1 데이터 인입 완료');
}, options)
klunch.getNutrients(form2, (err, output) => {
  if (err) throw err
  fs.writeFileSync("./data/" + filename + "_" + "nut2" + ".txt", output);
  console.log('nut2 데이터 인입 시작');
  console.log(output);
  console.log('nut2 데이터 인입 완료');
}, options)
klunch.getNutrients(form3, (err, output) => {
  if (err) throw err
  fs.writeFileSync("./data/" + filename + "_" + "nut3" + ".txt", output);
  console.log('nut3 데이터 인입 시작');
  console.log(output);
  console.log('nut3 데이터 인입 완료');
}, options)

klunch.getLunch(form1tom, (err, output) => {
  if (err) throw err
  fs.writeFileSync("./data/" + tomfilename + "_" + "time1" + ".txt", output);
  console.log('time1 다음날 데이터 인입 시작');
  console.log(output);
  console.log('time1 다음날 데이터 인입 완료');
}, options)
klunch.getLunch(form2tom, (err, output) => {
  if (err) throw err
  fs.writeFileSync("./data/" + tomfilename + "_" + "time2" + ".txt", output);
  console.log('time2 다음날 데이터 인입 시작');
  console.log(output);
  console.log('time2 다음날 데이터 인입 완료');
}, options)
klunch.getLunch(form3tom, (err, output) => {
  if (err) throw err
  fs.writeFileSync("./data/" + tomfilename + "_" + "time3" + ".txt", output);
  console.log('time3 다음날 데이터 인입 시작');
  console.log(output);
  console.log('time3 다음날 데이터 인입 완료');
}, options)

//영양정보 저장
klunch.getNutrients(form1tom, (err, output) => {
  if (err) throw err
  fs.writeFileSync("./data/" + tomfilename + "_" + "nut1" + ".txt", output);
  console.log('nut1 다음날 데이터 인입 시작');
  console.log(output);
  console.log('nut1 다음날 데이터 인입 완료');
}, options)
klunch.getNutrients(form2tom, (err, output) => {
  if (err) throw err
  fs.writeFileSync("./data/" + tomfilename + "_" + "nut2" + ".txt", output);
  console.log('nut2 다음날 데이터 인입 시작');
  console.log(output);
  console.log('nut2 다음날 데이터 인입 완료');
}, options)
klunch.getNutrients(form3tom, (err, output) => {
  if (err) throw err
  fs.writeFileSync("./data/" + tomfilename + "_" + "nut3" + ".txt", output);
  console.log('nut3 다음날 데이터 인입 시작');
  console.log(output);
  console.log('nut3 다음날 데이터 인입 완료');
}, options)
