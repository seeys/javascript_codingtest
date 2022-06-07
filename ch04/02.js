function solution(arr) {
  for (let x of arr) {
    let k = parseInt(String(x).split("").reverse("").join(""));
    if (isPrime(k)) console.log(k);
  }
}
function isPrime(n) {
  if (n === 1) return false;
  if (n === 2) return true;
  for (let i = 2; i <= parseInt(n / 2); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
solution(arr);
