let userName = "Andrew"
let userAge = 21
//console.log("Text message", variable) allows you to write to the
console
console.log("User Name", userName)
console.log("User Age", userAge)
let userPets = ['Cat', 'Dog']
let userBalance = 1200
const EVERY_DAY_SPENDING = 15.3
let everyDaySpendingPerPet = 6
let daysSurvived = 0
console.log('userPets: ', userPets )
console.log('EVERY_DAY_SPENDING: ', EVERY_DAY_SPENDING )
console.log('everyDaySpendingPerPet: ', everyDaySpendingPerPet)
console.log('daysSurvived: ', daysSurvived)

while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet *
    userPets.length
    userBalance -= spending
    daysSurvived++
    }
    console.log("User have sufficient money for " + daysSurvived + "days")

userPets.push('Hamster')
userBalance = 1200
daysSurvived = 0
while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet *
    userPets.length
    userBalance -= spending
    daysSurvived++
}
console.log("User have sufficient money for " + daysSurvived + "days")
userPets.pop()
everyDaySpendingPerPet = 2.4

userBalance = 1200
daysSurvived = 0
while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet *
    userPets.length
    userBalance -= spending
    daysSurvived++
}
console.log("User have sufficient money for " + daysSurvived + "days")

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