function solution(s) {
    return s.length % 2 ? s[Math.floor(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2]
}

// s.length % 2   // s의 인덱스 갯수를 2로 나눠서 0을 뺀 1~9사이의 홀수 결과가 나왔을때
// s[Math.floor(s.length / 2)]   //  true(홀수면 s 절반값의 반내림의 인덱스를 출력
// s[s.length / 2 - 1] + s[s.length / 2]   // false 면 s 절반값-1 인덱스와 s 절반값을 더해라


// ※ false 값이 나왔을 때 코드를 수정
// s[s.length / 2 - 1] + s[s.length / 2]    ===    s.slice(s.length / 2 - 1, s.length / 2 + 1)
