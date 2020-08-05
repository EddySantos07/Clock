$(document).ready(function () {
  var today = new Date();

  let hrs = today.getHours()

  let mins = today.getMinutes()

  let getSeconds = today.getSeconds();

  let meridian = 'AM';

  if (mins < 10) {
    mins = '0' + mins;
  }

  if ( hrs >= 12 ) {
    meridian = 'PM';
  } else {
    meridian = 'AM';
  }

  let clockTime = hrs + ':' + mins + ' ' + meridian;

  console.log(clockTime)


});