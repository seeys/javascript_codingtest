function solution() {
  const nationWidth = {
    korea: 220877,
    Rusia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900,
  };

  let min = "";
  let min_n = Number.MAX_SAFE_INTEGER;
  const kr = nationWidth["korea"];
  delete nationWidth["korea"];

  for (const [key, value] of Object.entries(nationWidth)) {
    if (min_n > Math.abs(kr - value)) {
      min_n = Math.abs(kr - value);
      min = key;
    }
  }
  console.log(min, min_n);
}

solution();
