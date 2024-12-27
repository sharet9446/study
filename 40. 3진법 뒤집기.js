function solution(n) {
    let par = n.toString(3)
    let num = ""
    for (let i = -1; i >= -par.length; i--) {
        num += par.at(i)
    }
    return parseInt(num, 3)
}