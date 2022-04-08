function solution(word, x) {
  let answer = 0;
  let pos = word.indexOf(x);
  while(pos !== -1){
    answer++;
    pos = word.indexOf(x, pos + 1);
  }
  return answer;
}


const str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));