function solution(arr) {
  arr = arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  console.log(arr);
  let answer = 0;
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    if (end <= arr[i][0]) {
      answer++;
      end = arr[i][1];
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

let arr1 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
