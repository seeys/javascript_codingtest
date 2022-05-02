function solution(id_list, report, k) {
  let answer = Array.from({ length: id_list.length }, () => 0);

  let report_list = {};
  id_list.map((user) => {
    report_list[user] = [];
  });
  report.map((user) => {
    const [user_id, report_id] = user.split(" ");
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });
  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
}

const id = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
console.log(solution(id, report, 2));
