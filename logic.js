var cDate = dayjs().format('MM-DD-YYYY');
console.log($('#1a'))
$('#1a').text(cDate);

var cTime = dayjs().format('hh:mm');
$('#2a').text(cTime);

if cTime > 