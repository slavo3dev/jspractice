let n = 7;
let b = n / 5;
let res = 0
console.log(Math.floor(b));


while((n = Math.floor(n/5))) {
    res += n;
}

console.log(res);