function solution(word, x) {
  return word.split("").filter((v) => v === x).length;
}

const str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
