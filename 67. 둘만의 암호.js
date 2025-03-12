function solution(s, skip, index) {
  let answer = "";
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (sk of skip) {
    alphabet = alphabet.filter((alpha) => alpha !== sk);
  }

  for (let i = 0; i < s.length; i++) {
    let alphaIndex = alphabet.indexOf(s[i]) + index;

    if (alphabet.length * 2 <= alphaIndex) {
      alphaIndex -= alphabet.length;
    }

    answer +=
      alphaIndex >= alphabet.length
        ? alphabet[alphaIndex - alphabet.length]
        : alphabet[alphaIndex];
  }

  return answer;
}
