const x = 4;
const y = 5;
const point = [0, 0];
const dist = [
  [0, 1],
  [1, 1],
  [2, 3],
  [1, 3],
];

const loca = [2, 2, 2, 4, 4, 4];
let map = Array.from(Array(y + 2), () => new Array(x + 2).fill(2));
function make_map(x, y, point, dist) {
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

function move(map, loca) {
  map[point[0] + 1][point[1] + 1] = 0;
  let dx = point[0] + 1;
  let dy = point[1] + 1;
  for (let x of loca) {
    if (x === 1) {
      dy = dy - 1;
    } else if (x === 2) {
      dy = dy + 1;
    } else if (x === 3) {
      dx = dx - 1;
    } else if (x === 4) {
      dx = dx + 1;
    }
  }
  map[dx][dy] = 1;
  console.log(map);
}
console.log("캐릭터 이동 전 지도");
make_map(x, y, point, dist);
console.log("캐릭터 이동 후 지도");
move(map, loca);
