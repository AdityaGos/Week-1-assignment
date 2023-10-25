/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  const lowerStr= str.replace(/[\W_]+/g, '').toLowerCase()
     var strLength = lowerStr.length;
  for (var i = 0; i <=(strLength-1)/2; i++) {
    //  console.log(lowerStr.charAt(i)+ " ->"+lowerStr.charAt(strLength-i-1))
    if(lowerStr.charAt(i)!==lowerStr.charAt(strLength-i-1))
    {
        console.log(lowerStr[i]+ " right side "+ lowerStr[strLength-i-1])
      return false
    }
  
}
return true;
}

module.exports = isPalindrome;
