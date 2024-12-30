function solution(s) {
    let result = [];
    let words = s.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = '';
        for (let j = 0; j < words[i].length; j++) {
            word += (j % 2 === 0) ? words[i][j].toUpperCase() : words[i][j].toLowerCase();
        }
        result.push(word);
    }
    return result.join(" ");
}