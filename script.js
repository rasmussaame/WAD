function fizzbuzz(n) {
    for (let  i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

function fibonacci() {
    let fib = [0, 1]
    while (fib.length < 100) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2])
    }
    console.log(fib.join("\n"))
}

function prime_generator(first) {
    let primes = []
    let possible = []
    for (let i = 2; i <= first; i++) {
        possible.push(i)
    }
    while (possible.length > 0) {
        let prime = possible.splice(0, 1)[0]
        primes.push(prime)
        let k = 2
        while (k * prime < first) {
            let i = possible.indexOf(k * prime)
            if (i != -1) {
                possible.splice(i, 1);
            }
            k++;
        }
    }
    console.log(primes.join("\n"))
}

prime_generator(47)