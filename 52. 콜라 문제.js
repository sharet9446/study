function solution(a, b, n) {
    var answer = 0;
    while (a <= n) {
        let exchange = Math.floor(n / a)
        let remain = n - exchange * a
        let Received = exchange * b
        n = Received + remain
        answer += Received
    }
    return answer;
}