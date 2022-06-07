function solution(str) {
  const rgx = /A/g;
  return str.replace(rgx, "#");
}

console.log(solution("BANANA"));
