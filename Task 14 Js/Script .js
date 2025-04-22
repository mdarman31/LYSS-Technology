// 1. Filter negative numbers
function filterNegatives(arr) {
    return arr.filter(num => num >= 0);
  }
  
  // 2. Difference from 13 calculator
  function diffFrom13(num) {
    return num > 13 ? 2 * (num - 13) : 13 - num;
  }
  
  // 3. Fibonacci series
  function fibonacci(n) {
    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
      seq.push(seq[i-1] + seq[i-2]);
    }
    return seq.slice(0, n);
  }
  
  // 4. Sum multiples of 3 and 5
  function sumMultiples(limit = 1000) {
    let sum = 0;
    for (let i = 3; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    return sum;
  }
  
  // 5. Cube function object
  const cubeCalculator = {
    calculate: num => num ** 3
  };
  
  // Test cases
  console.log(filterNegatives([1, -2, 3, -4, 5])); // [1, 3, 5]
  console.log(diffFrom13(20)); // 14 (2*(20-13))
  console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
  console.log(sumMultiples(10)); // 23 (3+5+6+9)
  console.log(cubeCalculator.calculate(3)); // 27