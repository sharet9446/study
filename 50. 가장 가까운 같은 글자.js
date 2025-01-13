function solution(s) {
    var answer = [];
    var save = ''
    for (let i = 0; i < s.length; i++) {
        if (save.includes(s[i])) { answer.push(i - save.lastIndexOf(s[i])) }
        else { answer.push(-1) }
        save += s[i];
    }
    return answer;
}