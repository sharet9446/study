function solution(n, m, section) {
  let wallLangth = 0;
  let answer = 0;
  if (Math.max(...section) - Math.min(...section) < m) {
    return 1;
  }
  for (let i = 0; i <= section.length - 1; i++) {
    const wallDistance = section[i + 1] - section[i];
    wallLangth += wallDistance;
    if (wallLangth < m) {
      continue;
    } else {
      answer++;
      wallLangth = 0;
    }
  }
  return answer;
}
