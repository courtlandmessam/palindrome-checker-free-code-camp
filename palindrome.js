function palindrome(str) {
  //Removes nonalphanumeric characters and makes characters upper case----------
  str = str.match(/\w*/g);
  str = str.join("");
  str = str.replace("_", "");
  str = str.toUpperCase();

  //Creates a reverse string to compare-----------------------------------------
  let reverseStr = str.split("");
  reverseStr = reverseStr.reverse();
  reverseStr = reverseStr.join("");

  //Compares strings------------------------------------------------------------
  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}



palindrome("2_erferf@#$@#$!#$! A3*3#A2");
