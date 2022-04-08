function solution(a, b) {
  const len = a.length;
  for (let i = 0; i < len; i++) {
    if (
      (a[i] == 1 && b[i] == 3) ||
      (a[i] == 2 && b[i] == 1) ||
      (a[i] == 3 && b[i] == 2)
    ) {
      console.log("A");
    } else if (
      (a[i] == 2 && b[i] == 3) ||
      (a[i] == 1 && b[i] == 2) ||
      (a[i] == 3 && b[i] == 1)
    ) {
      console.log("B");
    } else {
      console.log("D");
    }
  }
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
solution(a, b);
