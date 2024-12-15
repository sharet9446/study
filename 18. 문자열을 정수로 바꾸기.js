function solution(s) {
    if (1 <= String(s).length && String(s).length <= 5 && s != 0) { // s의 문자열 갯수가 1보다 크거나 같고, 5보다 작거나 같을때 그리고 s가 0이 아닐때
        return Number(s, 10) // s를 십진수로 바꿔준다.
    }
}

/**
 * parseInt(s, 10);를
 * 
 * +s;
 * s/1;
 * parseInt(s);
 * Number(s);
 * 
 * 등 으로 바꿔 줄 수 있다.
 * 
 */