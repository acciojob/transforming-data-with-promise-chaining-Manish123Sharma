//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const inputVal = parseFloat(document.getElementById("ip").value);
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // Clear previous output

  // Utility function to return a promise that resolves after a delay
  function delayedOperation(value, operation, delay, isFinal = false) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = operation(value);
        outputDiv.innerHTML = isFinal
          ? `Final Result: ${result}`
          : `Result: ${result}`;
        resolve(result);
      }, delay);
    });
  }

  // Chain of promises
  delayedOperation(inputVal, (n) => n, 2000) // Initial value (2s)
    .then((res1) => delayedOperation(res1, (n) => n * 2, 1000)) // Multiply by 2 (1s)
    .then((res2) => delayedOperation(res2, (n) => n - 3, 1000)) // Subtract 3 (1s)
    .then((res3) => delayedOperation(res3, (n) => n / 2, 1000)) // Divide by 2 (1s)
    .then((res4) => delayedOperation(res4, (n) => n + 10, 1000, true)); // Add 10 (1s)
});
