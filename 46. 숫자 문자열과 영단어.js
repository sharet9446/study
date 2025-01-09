function solution(s) {
    let str = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
    for (let key in str) {
        if (s.includes(key)) {
            s = s.replaceAll(key, str[key]);
        }
    }
    return Number(s);
}