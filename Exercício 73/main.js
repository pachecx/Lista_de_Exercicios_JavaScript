let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let apenas = arr.filter((n) => {
  if (n > 5) {
    return n;
  }
});

console.log(apenas);

let frutas = ["pera", "banana", "manga", "uva", "morango"];

let cesta = frutas.filter((f) => {
  if(f === "morango" || f === "pera"){
    return f
  }
})

console.log(cesta)
