function solution(s, n) {
    var answer = '';
    let alpa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let ALPA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (let x of s) {
        if (alpa.includes(x)) {
            let idx = alpa.indexOf(x) + n
            if (idx >= alpa.length) {
                idx -= alpa.length
            }
            answer += alpa[idx]
        }
        else if (ALPA.includes(x)) {
            let idx = ALPA.indexOf(x) + n
            if (idx >= ALPA.length) {
                idx -= ALPA.length
            }
            answer += ALPA[idx]
        }
        else {
            answer += x
        }
    }
    return answer;
}