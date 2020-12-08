const fs = require('fs');

const input = fs.readFileSync('./day4.txt');
const inputArr = input
  .toString()
  .split('\r\n\r\n')
  .map((x) => x.replace(/\r\n/g, ' '))
  .map((x) => x + ' ');

const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
let passwordCount = 0;
let validPassports = 0;

const passwords = (data) => fields.every((field) => data.includes(field));

const passwordsRules = (data) => {
  const rulebyr = /byr:(19[2-9][0-9]|200[0-2]) /;
  const ruleiyr = /iyr:(201[0-9]|2020) /;
  const ruleeyr = /eyr:(202[0-9]|2030) /;
  const rulehgt = /hgt:(((59)|(6[0-9])|(7[0-6]))in|(1(([5-8][0-9])|(9[0-3]))cm)) /;
  const rulehcl = /hcl:#([0-9]|[a-f]){6} /;
  const ruleecl = /ecl:(amb|blu|brn|gry|grn|hzl|oth) /;
  const rulepid = /pid:([0-9]){9} /;

  return (
    rulebyr.test(data) &&
    ruleiyr.test(data) &&
    ruleeyr.test(data) &&
    rulehgt.test(data) &&
    rulehcl.test(data) &&
    ruleecl.test(data) &&
    rulepid.test(data)
  );
};

for (let i = 0; i < inputArr.length; i++) {
  if (passwords(inputArr[i])) {
    passwordCount++;
    if (passwordsRules(inputArr[i])) {
      validPassports++;
    }
  }
}

console.log(passwordCount);
console.log(validPassports);
