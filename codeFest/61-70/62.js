function solution() {
  const word = "aacdddddddddfffffffffgghhh";
  console.log(
    `${word.match(/a/g).length}${Number(word.match(/b/g))}${
      word.match(/c/g).length
    }${word.match(/d/g).length}${Number(word.match(/e/g))}${
      word.match(/f/g).length
    }${word.match(/g/g).length}${word.match(/h/g).length}`
  );
}

solution();
