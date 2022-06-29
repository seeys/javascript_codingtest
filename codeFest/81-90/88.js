function make_map(x, y, point, dist) {
  let map = Array.from(Array(y + 2), () => new Array(x + 2).fill(2));
  for (let i = 1; i < y + 1; i++) {
    for (let j = 1; j < x + 1; j++) {
      map[i][j] = 0;
    }
  }
  map[point[0] + 1][point[1] + 1] = 1;
  for (let [x, y] of dist) {
    map[x + 1][y + 1] = 2;
  }
  console.log(map);
}

const x = 4;
const y = 5;
const point = [0, 0];
const dist = [
  [0, 1],
  [1, 1],
  [2, 3],
  [1, 3],
];

make_map(x, y, point, dist);
