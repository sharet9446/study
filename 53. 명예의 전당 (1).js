function solution(k, score) {
    var answer = [];
    let myeong = [];
    for (let i = 0; i < score.length; i++) {
        if (myeong.length < k) {
            myeong.push(score[i])
        }
        else {
            myeong.push(score[i])
            myeong.sort((a, b) => b - a).pop()
        }
        answer.push(Math.min(...myeong))
    }
    return answer;
}