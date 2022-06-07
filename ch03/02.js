function solution(str) {
  let len = str.length;
  str = str.toLowerCase();
  let pel = "";
  for (let i = 0; i < len; i++) {
    if (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97) {
      pel += str[i];
    }
  }

  return pel === pel.split("").reverse().join("") ? "YES" : "NO";
}

const str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
