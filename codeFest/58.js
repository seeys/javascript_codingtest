function solution(n) {
  let answer = [];
  arr = String(n).split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr[i]);
    if (i === arr.length - 1) continue;
    if (i % 3 === 2) answer.push(",");
  }
  console.log(answer.reverse().join(""));
}

solution(1234567899);
