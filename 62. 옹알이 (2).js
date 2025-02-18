function solution(babbling) {
  let count = 0;
  const babble = ["aya", "ye", "woo", "ma"];

  for (let b of babbling) {
    let prev = "";
    let cur = b;
    let isValid = true;

    while (cur.length > 0) {
      let found = false;

      for (let word of babble) {
        if (cur.startsWith(word)) {
          if (prev === word) {
            isValid = false;
            break;
          }
          prev = word;
          cur = cur.slice(word.length);
          found = true;
          break;
        }
      }
      if (!found) break;
    }
    if (isValid && cur.length === 0) count++;
  }

  return count;
}
