function solution(x, arr) {
  let answer = 0;
  for (let i of arr) {
    let a = i % 10;
    if (x === a) {
      answer++;
    }
  }
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(3, arr));
console.log(solution(0, arr2));
