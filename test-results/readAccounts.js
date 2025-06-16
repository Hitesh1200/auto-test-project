const xlsx = require('xlsx');
const path = require('path');

function readAccountsFromExcel() {
    const filePath = path.resolve('C:/Users/Lenovo/Desktop/JoinTraffic/Email-login.xlsx');
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const data = xlsx.utils.sheet_to_json(worksheet);
    return data; // should have Email and Password keys
    
}

module.exports = readAccountsFromExcel;
