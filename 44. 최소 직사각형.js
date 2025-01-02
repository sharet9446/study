function solution(sizes) {
    let w = [];
    let h = [];
    for (let i = 0; i < sizes.length; i++) {
        w.push(sizes[i].sort((a, b) => b - a)[0])
        h.push(sizes[i][1])
    }
    return Math.max(...w) * Math.max(...h)
}