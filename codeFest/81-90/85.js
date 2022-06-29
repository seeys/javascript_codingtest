function solution(k) {
  let num = "1";
  for (let i = 0; i < k - 1; i++) {
    let tmp = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    tmp[0] = String(num)
      .split("")
      .filter((v) => v === "1").length;
    tmp[1] = String(num)
      .split("")
      .filter((v) => v === "2").length;
    tmp[2] = String(num)
      .split("")
      .filter((v) => v === "3").length;
    tmp[3] = String(num)
      .split("")
      .filter((v) => v === "4").length;
    tmp[4] = String(num)
      .split("")
      .filter((v) => v === "5").length;
    tmp[5] = String(num)
      .split("")
      .filter((v) => v === "6").length;
    tmp[6] = String(num)
      .split("")
      .filter((v) => v === "7").length;
    tmp[7] = String(num)
      .split("")
      .filter((v) => v === "8").length;
    tmp[8] = String(num)
      .split("")
      .filter((v) => v === "9").length;
    let word = [];
    for (let j = 0; j < 9; j++) {
      if (tmp[j] !== 0) {
        word.push(String(j + 1), String(tmp[j]));
      }
    }
    num = word.join("");
  }
  return num;
}

function solution(n) {
  let answer = "1";

  if (n === 1) {
    return 1;
  }

  for (let i = 1; i < n; i++) {
    answer = rule(answer);
  }

  return answer;
}

function rule(answer) {
  let answerMax = 9;
  let result = "";

  for (let i = 1; i < answerMax; i++) {
    let re = new RegExp(i, "g");
    let count = (answer.match(re) || []).length;

    if (count >= 1) {
      result = result + String(i) + String(count);
    }
  }
  return result;
}

const user_input = 7;
console.log(solution(user_input));

console.log(solution(6));
