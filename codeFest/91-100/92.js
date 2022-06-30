const input = `이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'5,000,000','S은행','100-0000-0000-002'
이과장,'3,200,000','S은행','100-0000-0000-003'
홍팀장,'3,300,000','S은행','100-0000-0000-004'
이대리,'5,300,000','S은행','100-0000-0000-005'`;

let arr = input.split("\n");
let money = [];

for (let x of arr) {
  let k = x.split(",");
  money.push(k.slice(1, k.length - 2).join(""));
}
console.log(money);
let m1 = "";
let m2 = "";
let result = [];
for (let k of money) {
  for (let tmp of k) {
    if (tmp != "'") {
      if (tmp === "3") {
        m1 += "1";
        m2 += "2";
      } else if (tmp === "4") {
        m1 += "2";
        m2 += "2";
      } else if (tmp === "6") {
        m1 += "1";
        m2 += "5";
      } else {
        m1 += tmp;
        m2 += "0";
      }
    }
  }
  console.log(m1);
  console.log(m2);
  result.push([parseInt(m1, 10), parseInt(m2, 10)]);
  m1 = "";
  m2 = "";
}
console.log(result);
