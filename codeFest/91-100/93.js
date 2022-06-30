function solution(page, frame) {
  let queue = [];
  let time = 0;
  if (frame === 0) {
    time = page.length * 6;
    return time;
  }

  for (let x of page) {
    if (!queue.includes(x)) {
      time += 6;
      if (queue.length === frame) {
        queue.shift();
      }
      queue.push(x);
    } else {
      time += 1;
    }
    console.log(queue);
  }
  console.log(time);
}

console.log(solution("ABCEDF", 0));
