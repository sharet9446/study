function solution(s) {
    if (s.length === 4 || s.length === 6) {
        if (Array.from(s).every(num => isFinite(num))) {
            return true
        }
        else {
            return false
        }
    }
    return false
}