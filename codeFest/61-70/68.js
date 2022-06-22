function solution(time, now) {
  let answer = [];
  now = now.split(":").map((i) => parseInt(i));
  let idx = now[0] * 60 + now[1];
  for (let x of time) {
    let tmp = x.split(":").map((i) => parseInt(i));
    tmp = tmp[0] * 60 + tmp[1];
    if (tmp < idx) {
      answer.push("지나갔습니다.");
    } else {
      let hour = parseInt((tmp - idx) / 60);
      let minute = (tmp - idx) % 60;
      answer.push(
        String(hour).padStart(2, 0) +
          "시간" +
          String(minute).padStart(2, 0) +
          "분"
      );
    }
  }
  console.log(answer);
}

const time = ["12:30", "13:20", "14:13"];
const now = "12:40";
solution(time, now);
