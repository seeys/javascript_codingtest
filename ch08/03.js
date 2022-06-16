function pre() {
  const DFS = (v) => {
    if (v > 7) return;
    else {
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  };
  DFS(1);
}

function mid() {
  const DFS = (v) => {
    if (v > 7) return;
    else {
      DFS(v * 2);
      console.log(v);
      DFS(v * 2 + 1);
    }
  };
  DFS(1);
}

function post() {
  const DFS = (v) => {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      console.log(v);
    }
  };
  DFS(1);
}

pre();
console.log();
mid();
console.log();
post();
