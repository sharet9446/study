function solution(s) {
  let x = null;
  let save1 = 0;
  let save2 = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      save1 += 1;
      x = s[i];
      continue;
    }

    s[i] === x ? save1++ : save2++;

    if (save1 === save2) {
      count++;
      save1 = 0;
      save2 = 0;
      s = s.slice(i + 1);
      i = -1;
    }
  }
  if (s) count++;

  return count;
}
