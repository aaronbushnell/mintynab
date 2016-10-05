var csv = require('csv-parser');
var fs = require('fs');
var output = '';

fs.createReadStream(process.argv[2])
  .pipe(csv())
  .on('headers', function () {
    output += `"Date","Description","Amount","Transaction Type","Account Name"\n`;
  })
  .on('data', function (data) {
    var oper = '';

    if (data['Transaction Type'] === 'debit') {
      oper = '-';
    } else if(data['Transaction Type'] === 'credit') {
      oper = '';
    }

    output += `"${data.Date}","${data.Description}","${oper}${data.Amount}","${data['Transaction Type']}","${data['Account Name']}"\n`;
  })
  .on('end', function () {
    console.log(output);
  })
