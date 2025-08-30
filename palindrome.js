function palindromeChkFwdLoop(str) {
  let reversed = "";
  // forward running loop
  for (let i = 0; i < str.length; i++) {
    reversed = str[i].toLowerCase() + reversed;
  }

  return reversed === str;
}

function palindromeChkBwdLoop(str) {
  let reversed = "";

  //   backward running loop
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i].toLowerCase();
  }

  return reversed === str;
}

function palindromeChkForLoop(str) {
  let reversed = "";

  // using for
  for (let char of str) {
    reversed = char.toLowerCase() + reversed;
  }

  return reversed === str;
}

function palindromeChkSingleLine(str) {
  // in single line using build in methods
  return str.split("").reverse().join("").toLowerCase() === str;
}

console.log(palindromeChkFwdLoop("kayak"));
console.log(palindromeChkBwdLoop("kayak"));
console.log(palindromeChkForLoop("kayak"));
console.log(palindromeChkSingleLine("kayak"));
