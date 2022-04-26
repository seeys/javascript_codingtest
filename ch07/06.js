function solution(arr) {
  let answer = [];
  let len = arr.length;
  let sort_arr = [...arr];
  arr.sort((a, b) => a - b);
  console.log(sort_arr);
  for (let i = 0; i < len; i++) {
    if (arr[i] !== sort_arr[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr1 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr1));
