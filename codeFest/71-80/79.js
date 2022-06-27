const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값

function rotate(inL, inN) {
  let after = [...inL];
  while (inN--) {
    after.unshift(after.pop());
  }
  let dis = inL.map((v, i) => Math.abs(v - after[i]));
  let idx = dis.indexOf(Math.min(...dis));
  console.log(idx);
  console.log(inL[idx], after[idx]);
}

rotate(l, 3);
