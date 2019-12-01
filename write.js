const klunch = require('./index')
const async = require('async')
const moment = require('moment');
require('moment-timezone');
require('date-utils')
var fs = require('fs');
moment.tz.setDefault("Asia/Seoul");
var path = require('path');

var today = new Date();
var tyear = today.getFullYear();
var tmonth = today.getMonth() + 1;
var tdate = today.getDate();
// var tdate = '30';
var tom = Date.tomorrow();
var tomtom = tom.addDays(1);
var tomyear = tom.getFullYear();
var tommonth = tom.getMonth() + 1;
var tomfilename = moment().add(1, "days").format("YYYYMD")
var tomdate = moment().add(1, "days").format("D")
var filename = tyear + "" + tmonth + "" + tdate;
console.log("k-lunch 급식 정보  인입 프로그램");
console.log("=========================================================");
console.log( "절대경로 상태 " + path.join( __dirname, './' ) );
console.log( "상대경로 상태 " + process.cwd() );
var pathdata = path.join( __dirname, './' );
console.log("=========================================================");
console.log("아래 date값을 현재 날짜와 확인해 주십시오.");
console.log();
console.log("Now Date: " + today);

var nothing = 'nothing';

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

var tasks = [
  //금일 급식정보 저장
  function(callback) {
    klunch.getLunch(form1, (err, output) => {
      if (err) throw err
      if (output == nothing) {} else {
        fs.writeFileSync(pathdata + "./data/" + filename + "_" + "time1" + ".txt", JSON.stringify(output));
      }
      callback(null, 'time1 인입');
    }, options)
  },
  function(callback) {
    klunch.getLunch(form2, (err, output) => {
      if (err) throw err
      if (output == nothing) {} else {
        fs.writeFileSync(pathdata + "./data/" + filename + "_" + "time2" + ".txt", JSON.stringify(output));
      }
      callback(null, 'time2 인입');
    }, options)
  },
  function(callback) {
    klunch.getLunch(form3, (err, output) => {
      if (err) throw err
      if (output == nothing) {} else {
        fs.writeFileSync(pathdata + "./data/" + filename + "_" + "time3" + ".txt", JSON.stringify(output));
      }
      callback(null, 'time3 인입');
    }, options)
  },

  //금일 영양정보 저장
  function(callback) {
    klunch.getNutrients(form1, (err, output) => {
      if (err) throw err
      if (output == nothing) {} else {
        fs.writeFileSync(pathdata + "./data/" + filename + "_" + "nut1" + ".txt", JSON.stringify(output));
      }
      callback(null, 'nut1 인입');
    }, options)
  },
  function(callback) {
    klunch.getNutrients(form2, (err, output) => {
      if (err) throw err
      if (output == nothing) {} else {
        fs.writeFileSync(pathdata + "./data/" + filename + "_" + "nut2" + ".txt", JSON.stringify(output));
      }
      callback(null, 'nut2 인입');
    }, options)
  },
  function(callback) {
    klunch.getNutrients(form3, (err, output) => {
      if (err) throw err
      if (output == nothing) {} else {
        fs.writeFileSync(pathdata + "./data/" + filename + "_" + "nut3" + ".txt", JSON.stringify(output));
      }
      callback(null, 'nut3 인입');
    }, options)
  },

  //악일 급식정보 저장
  function(callback) {
    klunch.getLunch(form1tom, (err, output) => {
      if (err) throw err
      if (output == nothing) {} else {
        fs.writeFileSync(pathdata + "./data/" + tomfilename + "_" + "time1" + ".txt", JSON.stringify(output));
      }
      callback(null, 'time1tom 인입');
    }, options)
  },
  function(callback) {
    klunch.getLunch(form2tom, (err, output) => {
      if (err) throw err
      if (output == nothing) {} else {
        fs.writeFileSync(pathdata + "./data/" + tomfilename + "_" + "time2" + ".txt", JSON.stringify(output));
      }
      callback(null, 'time2tom 인입');
    }, options)
  },
  function(callback) {
    klunch.getLunch(form3tom, (err, output) => {
      if (err) throw err
      if (output == nothing) {} else {
        fs.writeFileSync(pathdata + "./data/" + tomfilename + "_" + "time3" + ".txt", JSON.stringify(output));
      }
      callback(null, 'time3tom 인입');
    }, options)
  },

  //악일 영양정보 저장
  function(callback) {
    klunch.getNutrients(form1tom, (err, output) => {
      if (err) throw err
      if (output == nothing) {} else {
        fs.writeFileSync(pathdata + "./data/" + tomfilename + "_" + "nut1" + ".txt", JSON.stringify(output));
      }
      callback(null, 'nut1tom 인입');
    }, options)
  },
  function(callback) {
    klunch.getNutrients(form2tom, (err, output) => {
      if (err) throw err
      if (output == nothing) {} else {
        fs.writeFileSync(pathdata + "./data/" + tomfilename + "_" + "nut2" + ".txt", JSON.stringify(output));
      }
      callback(null, 'nut2tom 인입');
    }, options)
  },
  function(callback) {
    klunch.getNutrients(form3tom, (err, output) => {
      if (err) throw err
      if (output == nothing) {} else {
        fs.writeFileSync(pathdata + "./data/" + tomfilename + "_" + "nut3" + ".txt", JSON.stringify(output));
      }
      callback(null, 'nut3tom 인입');
    }, options)
  }
];

async.series(tasks, function(err, results) {
  console.log(results);
});
