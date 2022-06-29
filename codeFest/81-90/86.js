function solution(point, dish) {
  let cnt = 0;
  dish -= 1;
  let sortPoint = point.slice();
  sortPoint.sort((a, b) => {
    return a - b;
  });

  while (true) {
    let front = point.shift();
    if (sortPoint[0] === front) {
      if (dish === 0) break;
      dish -= 1;
      sortPoint.shift();
    } else {
      point.push(front);
      if (dish === 0) {
        dish = point.length - 1;
      } else {
        dish = dish - 1;
      }
    }
    cnt++;
    console.log(point);
    console.log(sortPoint);
    console.log("---------------------");
  }
  return cnt;
}

console.log(solution([5, 2, 3, 1, 2, 5], 1));
