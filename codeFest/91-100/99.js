function solution(stone, rabbit) {
  let r_n = rabbit.length;
  let s_n = stone.length;
  let result = Array.from({ length: r_n }, () => "pass");
  for (let i = 0; i < r_n; i++) {
    for (let j = rabbit[i] - 1; j < s_n; j += rabbit[i]) {
      stone[j] -= 1;
      if (stone.includes(-1)) {
        result[i] = "fail";
      }
    }
  }
  return result;
}

const stone = [1, 2, 1, 4, 5, 2];
const rabbit = [2, 1, 3, 1];

console.log(solution(stone, rabbit));
