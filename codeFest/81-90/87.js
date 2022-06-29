function solution(people, food) {
  let Rank = new Map();
  let n = people.length;
  for (let i = 0; i < n; i++) {
    Rank.set(people[i], food[i]);
  }
  const arr = [...Rank];
  const sortMap = new Map(arr.sort((a, b) => b[1] - a[1]));
  const result = new Map();
  let i = 1;
  for (let [key, val] of sortMap) {
    result[key] = i++;
  }
  return result;
}

console.log(
  solution(["손오공", "야모챠", "메지터", "비콜로"], [70, 10, 55, 40])
);
