const date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var week = date.getDay();
var day = date.getDate();

console.log(year+"年"+month+"月"+day+"日");
