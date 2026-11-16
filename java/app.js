// prime.js
function isPrime(n) {
  // 1. n < 2 бол анхны тоо биш
  if (n < 2) return false;

  // 2. 2-оос n-1 хүртэл хуваагч хайх
  for (let i = 2; i < n; i++) {
    // 3. Хуваагдаж байвал шууд false
    if (n % i === 0) return false;
  }

  // 4. Хуваагч олдсонгүй бол анхны тоо
  return true;
}

let result = "";
let count = 0;

for (let n = 1; n <= 30; n++) {
  // 5. Анхны бол result-д залгаж, тоолно
  if (isPrime(n)) {
    result += n + " ";
    count++;
  }
}

console.log(result);
console.log(`Нийт: ${count}`);