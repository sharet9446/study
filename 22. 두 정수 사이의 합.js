function solution(a, b) {
    if (a <= b) {
        for (var sum = 0; a <= b; a++) {
            sum = sum + a
        }
    }
    else {
        for (var sum = 0; a >= b; a--)
            sum = sum + a
    }
    return sum
}