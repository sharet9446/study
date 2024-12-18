function solution(n) {
    let answer = '수박';
    let half = n / 2;
    return n % 2 ? answer.repeat(Math.floor(half))  + answer[0] : answer.repeat(half);
}