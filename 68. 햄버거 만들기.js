function solution(ingredient) {
  let count = 0;
  let order = [];

  for (let i of ingredient) {
    order.push(i);

    if (order.length >= 4 && order.slice(-4).join("") === "1231") {
      order.splice(-4, 4);
      count++;
    }
  }
  return count;
}
