function solution() {
  let answer = 0;
  for (let i = 0; i <= 1000; i++) {
    let x = String(i)
      .split("")
      .filter((v) => v === "1").length;
    answer += x;
  }
  console.log(answer);
}

solution();
