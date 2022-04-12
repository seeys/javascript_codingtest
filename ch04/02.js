function solution(arr) {
  let arr_reverse = [];
  // 숫자 뒤집기
  for (let x of arr) {
    arr_reverse.push(parseInt(x.toString().split("").reverse().join("")));
  }
  console.log(arr_reverse);
  for (let x of arr_reverse) {
    if (isPrime(x)) console.log(x);
  }
}
function isPrime(n) {
  if (n === 1) return false;
  if (n === 2) return true;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
const arr = [32, 55, 62, 20, 250, 370, 200, 100, 100];
solution(arr);
