function square(n) {
    for (var x = 1; x <= n; x++){
        if (n == x * x) {
            return 1
        }
        else {
           var result = -1
        }
    }
    return result
}

console.log(Number.isInteger(-1.23))
const x = 'hello world';
for (let y of x) {
	console.log(y);
}