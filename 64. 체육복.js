function solution(n, lost, reserve) {
  const newLost = lost
    .filter((item) => !reserve.includes(item))
    .sort((a, b) => a - b);
  let newReserve = reserve
    .filter((item) => !lost.includes(item))
    .sort((a, b) => a - b);

  let holding = n - newLost.length;

  for (const l of newLost) {
    const borrowIdx = newReserve.findIndex(
      (re) => re === l - 1 || re === l + 1
    );
    if (borrowIdx !== -1) {
      newReserve.splice(borrowIdx, 1);
      holding++;
    }
  }

  return holding;
}
